// src/routes/campaign.js
var express = require('express');
var router = express.Router();
var campaign = require('../models/campaign');

router.get('/meta_forms', async function(req, res, next) {
  try {
    const fetch = require('node-fetch');
    const token = process.env.FB_LONG_LIVED_USER_TOKEN;
    
    let allForms = [];
    
    // Step 1: Attempt to fetch all pages the token has access to (works for System/User tokens)
    const pagesResponse = await fetch(`https://graph.facebook.com/v19.0/me/accounts?access_token=${token}`);
    const pagesData = await pagesResponse.json();
    
    if (pagesData.error) {
      // Fallback: The token might be a Page Access Token. Try fetching forms directly for the single page.
      const fallbackResponse = await fetch(`https://graph.facebook.com/v19.0/me/leadgen_forms?access_token=${token}&fields=id,name,status`);
      const fallbackData = await fallbackResponse.json();
      
      if (fallbackData.error) {
        return res.status(400).json({ error: fallbackData.error.message });
      }
      allForms = fallbackData.data || [];
    } else if (pagesData.data && pagesData.data.length > 0) {
      // Step 2: Loop through each page and fetch its leadgen forms
      for (const page of pagesData.data) {
        const formsResponse = await fetch(`https://graph.facebook.com/v19.0/${page.id}/leadgen_forms?access_token=${page.access_token}&fields=id,name,status`);
        const formsData = await formsResponse.json();
        
        if (formsData.data) {
          // Tag each form with its source page name for better UI display (e.g., "Diwali Offer (Nexa)")
          const formsWithPageName = formsData.data.map(form => ({
            ...form,
            name: `${form.name} - [${page.name}]`
          }));
          allForms = allForms.concat(formsWithPageName);
        }
      }
    }
    
    res.json(allForms); 
  } catch (e) {
    console.error("Error fetching Meta forms:", e);
    res.status(500).json({ error: e.message });
  }
});

router.get('/facebook_ad_accounts', async function(req, res, next) {
  try {
    const fetch = require('node-fetch');
    const token = process.env.FB_LONG_LIVED_USER_TOKEN;
    const response = await fetch(`https://graph.facebook.com/v19.0/me/adaccounts?fields=name,account_id,id&access_token=${token}`);
    const data = await response.json();
    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }
    res.json(data.data || []);
  } catch (e) {
    console.error("Error fetching Meta ad accounts:", e);
    res.status(500).json({ error: e.message });
  }
});

router.get('/facebook_campaigns/:ad_account_id', async function(req, res, next) {
  try {
    const fetch = require('node-fetch');
    const token = process.env.FB_LONG_LIVED_USER_TOKEN;
    const ad_account_id = req.params.ad_account_id;
    // ensure ad_account_id starts with "act_"
    const act_id = ad_account_id.startsWith('act_') ? ad_account_id : `act_${ad_account_id}`;
    
    // Fetch ALL campaigns with pagination
    let allCampaigns = [];
    let url = `https://graph.facebook.com/v19.0/${act_id}/campaigns?fields=name,status,effective_status,objective,daily_budget,lifetime_budget,insights.date_preset(last_30d){spend,actions,cost_per_action_type}&effective_status=["ACTIVE","PAUSED","IN_PROCESS","WITH_ISSUES"]&limit=100&access_token=${token}`;
    
    while (url) {
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        return res.status(400).json({ error: data.error.message });
      }
      if (data.data) {
        allCampaigns = allCampaigns.concat(data.data);
      }
      // Check if there's a next page
      url = (data.paging && data.paging.next) ? data.paging.next : null;
    }
    
    // Map the insights data for easier frontend consumption
    const campaigns = allCampaigns.map(camp => {
      let spend = 0;
      let results = 0;
      let cost_per_result = 0;
      
      if (camp.insights && camp.insights.data && camp.insights.data.length > 0) {
        const insight = camp.insights.data[0];
        spend = parseFloat(insight.spend) || 0;
        
        if (insight.actions) {
          const leadAction = insight.actions.find(a => a.action_type === 'lead');
          if (leadAction) results = parseInt(leadAction.value);
        }
        
        if (insight.cost_per_action_type) {
          const costAction = insight.cost_per_action_type.find(a => a.action_type === 'lead');
          if (costAction) cost_per_result = parseFloat(costAction.value);
        }
      }
      
      return {
        ...camp,
        spend: spend,
        results: results,
        cost_per_result: cost_per_result
      };
    });
    
    res.json(campaigns);
  } catch (e) {
    console.error("Error fetching Meta campaigns:", e);
    res.status(500).json({ error: e.message });
  }
});

router.get('/meta_leads/:meta_campaign_id', function(req, res, next) {
  try {
    const meta_campaign_id = req.params.meta_campaign_id;
    const db = require('../dbconnection');
    
    // First, find the internal campaign_details_id for this meta campaign
    db.query(`SELECT campaign_details_id, campaign_name FROM campaign_details WHERE campaign_id = ? LIMIT 1`, [meta_campaign_id], function(err, campaignRows) {
      if (err) return res.status(500).json({ error: err });
      
      if (!campaignRows || campaignRows.length === 0) {
        // No leads have been generated for this meta campaign yet (it hasn't hit the webhook)
        return res.json({
          campaign_name: "Meta Campaign (" + meta_campaign_id + ")",
          leads: []
        });
      }
      
      const internal_id = campaignRows[0].campaign_details_id;
      const campaign_name = campaignRows[0].campaign_name;
      
      // Then fetch the leads
      campaign.Get_Campaign_Leads(internal_id, function(err, leadRows) {
        if (err) return res.status(500).json({ error: err });
        res.json({
          campaign_name: campaign_name,
          leads: leadRows
        });
      });
    });
  } catch (e) {
    console.error("Error fetching Meta leads:", e);
    res.status(500).json({ error: e.message });
  }
});

router.post('/save_campaign', function(req, res, next) {
  try {
    //console.log(req.body);
    campaign.Save_Campaign(req.body, function(err, rows) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        console.log(rows);
        res.json(rows);
      }
    });
  } catch (e) {
     console.log(e);
    res.status(500).json({ error: e.message });
  } finally {
  }
});

router.get('/search_campaign', function(req, res, next) {
  try {
    const campaign_name = (req.query.campaign_name && req.query.campaign_name !== 'undefined' && req.query.campaign_name !== 'null') ? req.query.campaign_name : '';
    const branch_id = parseInt(req.query.branch_id, 10) || 0;
    const department_id = parseInt(req.query.department_id, 10) || 0;
    const form_id = (req.query.form_id && req.query.form_id !== 'undefined' && req.query.form_id !== 'null') ? req.query.form_id : '';

    campaign.Search_Campaign(campaign_name, branch_id, department_id, form_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  } finally {
  }
});
router.post('/Delete_Campaign', function(req, res, next) {
  try {
    campaign.Delete_Campaign(req.body.campaign_details_id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  } finally {
  }
});

router.get('/get_campaigne_department_details/:campaign_details_id', function(req, res, next) {
  try {
    const campaign_details_id_ = parseInt(req.params.campaign_details_id) || 0;
    campaign.get_campaigne_department_details(campaign_details_id_, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


router.get('/dashboard_summary', function(req, res, next) {
  try {
    campaign.Get_Campaign_Dashboard_Summary(function(err, rows) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/leads/:campaign_id', function(req, res, next) {
  try {
    campaign.Get_Campaign_Leads(req.params.campaign_id, function(err, rows) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Round-Robin User Management ─────────────────────────────────────────────

// GET all round-robin users for a campaign
router.get('/campaign_users/:campaign_details_id', async function(req, res) {
  try {
    const db = require('../dbconnection').promise();
    const conn = await db.getConnection();
    try {
      const [rows] = await conn.query(
        `SELECT cu.campaign_user_id, cu.user_id, cu.user_name, cu.sort_order, cu.is_active,
                ud.User_Details_Name, ud.Department_Id
         FROM campaign_users cu
         LEFT JOIN user_details ud ON cu.user_id = ud.User_Details_Id
         WHERE cu.campaign_details_id = ?
         ORDER BY cu.sort_order ASC, cu.campaign_user_id ASC`,
        [req.params.campaign_details_id]
      );
      res.json(rows);
    } finally { conn.release(); }
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// POST add a user to round-robin list
router.post('/campaign_users/add', async function(req, res) {
  try {
    const { campaign_details_id, user_id } = req.body;
    if (!campaign_details_id || !user_id) return res.status(400).json({ error: 'campaign_details_id and user_id required' });
    const db = require('../dbconnection').promise();
    const conn = await db.getConnection();
    try {
      // Get user name
      const [userRows] = await conn.query('SELECT User_Details_Name FROM user_details WHERE User_Details_Id = ?', [user_id]);
      const user_name = userRows[0] ? userRows[0].User_Details_Name : '';
      // Get next sort order
      const [maxRows] = await conn.query('SELECT COALESCE(MAX(sort_order), 0) + 1 AS next_order FROM campaign_users WHERE campaign_details_id = ?', [campaign_details_id]);
      const sort_order = maxRows[0].next_order;
      // Insert
      const [result] = await conn.query(
        'INSERT INTO campaign_users (campaign_details_id, user_id, user_name, sort_order) VALUES (?, ?, ?, ?)',
        [campaign_details_id, user_id, user_name, sort_order]
      );
      res.json({ success: true, campaign_user_id: result.insertId, user_name, sort_order });
    } finally { conn.release(); }
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// POST remove a user from round-robin list
router.post('/campaign_users/remove', async function(req, res) {
  try {
    const { campaign_user_id } = req.body;
    if (!campaign_user_id) return res.status(400).json({ error: 'campaign_user_id required' });
    const db = require('../dbconnection').promise();
    const conn = await db.getConnection();
    try {
      await conn.query('DELETE FROM campaign_users WHERE campaign_user_id = ?', [campaign_user_id]);
      res.json({ success: true });
    } finally { conn.release(); }
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// POST reset the rotation pointer (start from beginning)
router.post('/campaign_users/reset_rotation', async function(req, res) {
  try {
    const { campaign_details_id } = req.body;
    if (!campaign_details_id) return res.status(400).json({ error: 'campaign_details_id required' });
    const db = require('../dbconnection').promise();
    const conn = await db.getConnection();
    try {
      await conn.query('UPDATE campaign_details SET Last_User_Id = NULL WHERE campaign_details_id = ?', [campaign_details_id]);
      res.json({ success: true, message: 'Rotation reset. Next lead will go to the first user.' });
    } finally { conn.release(); }
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// ────────────────────────────────────────────────────────────────────────────

module.exports = router;