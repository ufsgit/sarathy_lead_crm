var http = require("http");
var server = http.Server(app);
var apppath = "/";
//var apppath = '/';
var socketIO = require("socket.io");
var db = require('./dbconnection');
const SibApiV3Sdk = require('sib-api-v3-sdk');
const port = process.env.PORT || 3552;
require('dotenv').config();
const cron = require("node-cron");
const fetch = require('node-fetch');
const fs = require('fs');
process.env.SENDGRID_API_KEY =
  "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";
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var multer = require("multer");
var multerupload = multer({ dest: "fileprint/" });
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");
const jwt = require("./helpers/jwt");
var routes = require("./routes/index");
const errorHandler = require("./helpers/error-handler");
var storedProcedure = require('./helpers/stored-procedure');

const nodemailer = require('nodemailer');
const helmet = require("helmet");

var Login = require("./routes/Login");
var User_Details = require("./routes/User_Details");
var Country = require("./routes/Country");
var Course = require("./routes/Course");
var Course_Intake = require("./routes/Course_Intake");
var Document = require("./routes/Document");
var Duration = require("./routes/Duration");
var Intake = require("./routes/Intake");
var Internship = require("./routes/Internship");
var Level_Detail = require("./routes/Level_Detail");
var Student = require("./routes/Student");
var Student_Document = require("./routes/Student_Document");
var Student_Message = require("./routes/Student_Message");
var Student_Status = require("./routes/Student_Status");
var Subject = require("./routes/Subject");
var Remarks = require("./routes/Remarks");
var University = require("./routes/University");
var Public_Data = require("./routes/Public_Data");
var Account_Group = require("./routes/Account_Group");
var Client_Accounts = require("./routes/Client_Accounts");
var Agent = require("./routes/Agent");
var Department = require("./routes/Department");
var Department_Status = require("./routes/Department_Status");
var Branch = require("./routes/Branch");
var Brand = require("./routes/Brand");
var DSE = require("./routes/DSE");
var Enquiry_Source = require("./routes/Enquiry_Source");
var Fees = require("./routes/Fees");
var User_Role = require("./routes/User_Role");
var Company = require("./routes/Company");
var Sub_Section = require("./routes/Sub_Section");
var Check_List = require("./routes/Check_List");
var Agent_Details = require("./routes/Agent_Details");
var Task = require("./routes/Task");
var Application_Status = require("./routes/Application_Status");
var Application_Group = require("./routes/Application_Group");
var Accounts = require("./routes/Accounts");
var Class = require("./routes/Class");
var Notes = require("./routes/Notes");
var Chat_Window = require("./routes/Chat_Window");
var Email_Template = require('./routes/Email_Template');
var campaign = require('./routes/campaign');
const Tata_Tele = require("./routes/Tata_Tele.js");
const CallDetails = require("./routes/call_Details.js");
var Enquiry_For = require("./routes/Enquiry_For.js");
var Location = require("./routes/Location.js");
var Status_Duration = require("./routes/Status_Duration.js");
var user_target = require("./routes/user_target.js");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use(apppath, routes);
app.use(apppath + "Login", Login);
app.use(apppath + "Public_Data", Public_Data);
app.use(apppath + "Account_Group", Account_Group);
app.use(apppath + "Client_Accounts", Client_Accounts);
app.use(apppath + "Agent", Agent);
app.use(apppath + "campaign", campaign);
app.use("/Tata_Tele", Tata_Tele);
app.use("/Call_Details", CallDetails);


var io = socketIO(server);

const VERIFY_TOKEN = "sarathy_webhook_2026"; // <-- create your own token
// 1?? Webhook Verification (GET request)
app.get('/webhook/facebook', (req, res) => {
  console.log(req.query);
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode && token) {
    console.log('1st', req.query);
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log("Webhook verified successfully!");
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  }
});

// 2. Webhook Lead Receiver (POST request)
app.post('/webhook/facebook', async (req, res) => {
  let body = req.body;
  console.log("Received POST from Facebook Webhook:");
  console.log(JSON.stringify(body, null, 2));

  if (body.object === 'page') {
    // Facebook requires a 200 OK within 20 seconds, send it immediately
    res.status(200).send('EVENT_RECEIVED');

    for (const entry of body.entry) {
      if (entry.changes) {
        for (const change of entry.changes) {
          if (change.field === 'leadgen' && change.value) {
            const leadgen_id = change.value.leadgen_id;
            console.log("New Lead Detected! Leadgen ID:", leadgen_id);

            try {
              const accessToken = process.env.FB_LONG_LIVED_USER_TOKEN;
              const response = await fetch(`https://graph.facebook.com/v19.0/${leadgen_id}?access_token=${accessToken}`);
              const leadData = await response.json();

              console.log("==== FULL LEAD DETAILS ====");
              console.log(JSON.stringify(leadData, null, 2));

              // 1. Extract Fields Dynamically
              const fieldData = leadData.field_data || [];
              let name = '', phone = '', location = '', model = '';

              fieldData.forEach(f => {
                const key = f.name.toLowerCase();
                const val = f.values[0] || '';
                if (key.includes('name')) name = val;
                if (key.includes('phone')) {
                  let p = val.replace(/^[pP]:/, '').replace(/^\+/, ''); // Remove p: and +
                  p = p.replace(/\D/g, ''); // Remove any non-digit characters
                  if (p.startsWith('91') && p.length > 10) {
                    p = p.substring(2); // Remove 91 country code if present
                  }
                  p = p.replace(/^0+/, ''); // Remove leading zeros
                  phone = p;
                }
                if (key.includes('showroom') || key.includes('district') || key.includes('location')) location = val;
                if (key.includes('model') || key.includes('vehicle') || key.includes('car') || key.includes('bike') || key.includes('scooter') || key.includes('variant') || key.includes('interested')) model = val;
              });

              // Ensure date is in IST (UTC+5:30) MySQL format: YYYY-MM-DD HH:mm:ss
              const created_time = leadData.created_time || new Date().toISOString();
              const utcDate = new Date(created_time);
              // Add 5 hours 30 minutes (330 minutes) to convert UTC → IST
              const istDate = new Date(utcDate.getTime() + 330 * 60 * 1000);
              const mysql_date = istDate.toISOString().replace('T', ' ').substring(0, 19);

              // 2. Map form_id to Campaign Stored Procedure via Database
              // Facebook sometimes sends form_id with a "f:" prefix — strip it to match CRM stored value
              const raw_form_id = change.value.form_id;
              const form_id = raw_form_id ? String(raw_form_id).replace(/^f:/, '') : raw_form_id;
              const fb_ad_id = change.value.ad_id; // Facebook Ad ID from webhook payload
              const pool = db.promise();
              const connection = await pool.getConnection();
              try {
                // Try to find a campaign mapping by form_id (now also fetching user/dept assignment fields)
                const [rows] = await connection.query(
                  `SELECT campaign_details_id, campaign_name, procedure_name, campaign_id,
                                            to_user_id, Department_Id, Department_Name, Department_Status_Id, 
                                            Department_Status_Name, Branch_Id, Branch_Name, Enquiry_Source_Id, Enquiry_Source_Name, FollowUp
                                     FROM campaign_details WHERE form_id = ? AND Delete_Status = 0 LIMIT 1`, [form_id]);

                let final_campaign_id = null;
                let final_campaign_name = null;
                let proc = null;
                let assigned_user_id = null;
                let assigned_user_name = null;
                let campaign_dept_id = null;
                let campaign_dept_name = null;
                let campaign_status_id = null;
                let campaign_status_name = null;
                let campaign_branch_id = null;
                let campaign_branch_name = null;
                let campaign_enquiry_source_id = null;
                let campaign_enquiry_source_name = null;
                let campaign_followup = null;

                if (rows.length > 0) {
                  proc = rows[0].procedure_name;
                  final_campaign_id = rows[0].campaign_details_id;
                  final_campaign_name = rows[0].campaign_name;
                  assigned_user_id = rows[0].to_user_id || null;
                  campaign_dept_id = rows[0].Department_Id || null;
                  campaign_dept_name = rows[0].Department_Name || null;
                  campaign_status_id = rows[0].Department_Status_Id || null;
                  campaign_status_name = rows[0].Department_Status_Name || null;
                  campaign_branch_id = rows[0].Branch_Id || null;
                  campaign_branch_name = rows[0].Branch_Name || null;
                  campaign_enquiry_source_id = rows[0].Enquiry_Source_Id || null;
                  campaign_enquiry_source_name = rows[0].Enquiry_Source_Name || null;
                  campaign_followup = rows[0].FollowUp || 0;
                } else if (fb_ad_id) {
                  // Try to look up by Facebook ad_id
                  try {
                    const adResponse = await fetch(`https://graph.facebook.com/v19.0/${fb_ad_id}?fields=campaign_id,campaign{name}&access_token=${accessToken}`);
                    const adData = await adResponse.json();
                    if (adData.campaign_id) {
                      const [campRows] = await connection.query(
                        `SELECT campaign_details_id, campaign_name, to_user_id, Department_Id, Department_Name,
                                                        Department_Status_Id, Department_Status_Name, Branch_Id, Branch_Name,
                                                        Enquiry_Source_Id, Enquiry_Source_Name, FollowUp
                                                 FROM campaign_details WHERE campaign_id = ? AND Delete_Status = 0 LIMIT 1`, [adData.campaign_id]);
                      if (campRows.length > 0) {
                        final_campaign_id = campRows[0].campaign_details_id;
                        final_campaign_name = campRows[0].campaign_name;
                        assigned_user_id = campRows[0].to_user_id || null;
                        campaign_dept_id = campRows[0].Department_Id || null;
                        campaign_dept_name = campRows[0].Department_Name || null;
                        campaign_status_id = campRows[0].Department_Status_Id || null;
                        campaign_status_name = campRows[0].Department_Status_Name || null;
                        campaign_branch_id = campRows[0].Branch_Id || null;
                        campaign_branch_name = campRows[0].Branch_Name || null;
                        campaign_enquiry_source_id = campRows[0].Enquiry_Source_Id || null;
                        campaign_enquiry_source_name = campRows[0].Enquiry_Source_Name || null;
                        campaign_followup = campRows[0].FollowUp || 0;
                      }
                    }
                  } catch (adErr) {
                    console.log(`⚠️ Could not fetch campaign from ad_id: ${adErr.message}`);
                  }
                }
                if (!final_campaign_id) {
                  console.log(`⚠️
                     Lead from form ${form_id} is not mapped to any campaign in the CRM. Ignoring lead.`);
                  continue;
                }

                // ── ROUND-ROBIN USER ASSIGNMENT ──────────────────────────────────────
                // Fetch all active users assigned to this campaign (ordered by sort_order)
                if (final_campaign_id) {
                  try {
                    const [campaignUsers] = await connection.query(
                      `SELECT cu.user_id, cu.user_name 
                                             FROM campaign_users cu 
                                             WHERE cu.campaign_details_id = ? AND cu.is_active = 1 
                                             ORDER BY cu.sort_order ASC, cu.campaign_user_id ASC`,
                      [final_campaign_id]
                    );

                    if (campaignUsers.length > 0) {
                      // Get the last assigned user for this campaign
                      const [lastRow] = await connection.query(
                        'SELECT Last_User_Id FROM campaign_details WHERE campaign_details_id = ?',
                        [final_campaign_id]
                      );
                      const lastUserId = lastRow[0] ? lastRow[0].Last_User_Id : null;

                      // Find who's next in the rotation
                      let nextIndex = 0;
                      if (lastUserId) {
                        const lastIndex = campaignUsers.findIndex(u => u.user_id === lastUserId);
                        nextIndex = (lastIndex + 1) % campaignUsers.length;
                      }

                      const nextUser = campaignUsers[nextIndex];
                      assigned_user_id = nextUser.user_id;
                      assigned_user_name = nextUser.user_name;

                      // Update Last_User_Id so next lead goes to the next person
                      await connection.query(
                        'UPDATE campaign_details SET Last_User_Id = ? WHERE campaign_details_id = ?',
                        [assigned_user_id, final_campaign_id]
                      );

                      console.log(`🔄 Round-Robin: assigning lead to user ${assigned_user_name} (${assigned_user_id}) [${nextIndex + 1}/${campaignUsers.length}]`);
                    } else if (assigned_user_id) {
                      // Fallback: no campaign_users rows, use the single to_user_id
                      const [userRows] = await connection.query(
                        'SELECT User_Details_Name FROM user_details WHERE User_Details_Id = ? AND DeleteStatus = 0 LIMIT 1',
                        [assigned_user_id]
                      );
                      if (userRows.length > 0) assigned_user_name = userRows[0].User_Details_Name;
                      console.log(`👤 Single user fallback: assigning to ${assigned_user_name} (${assigned_user_id})`);
                    }
                  } catch (rrErr) {
                    console.log(`⚠️ Round-Robin error, falling back to to_user_id: ${rrErr.message}`);
                    // Fallback to single user
                    if (assigned_user_id) {
                      try {
                        const [userRows] = await connection.query(
                          'SELECT User_Details_Name FROM user_details WHERE User_Details_Id = ? AND DeleteStatus = 0 LIMIT 1',
                          [assigned_user_id]
                        );
                        if (userRows.length > 0) assigned_user_name = userRows[0].User_Details_Name;
                      } catch (e2) { /* ignore */ }
                    }
                  }
                }
                // ─────────────────────────────────────────────────────────────────────

                // Fetch Role_Id and JE FollowUp dynamically
                let assigned_role_id = 0;
                let je_followup = 0;
                let model_country_id = 0;
                let final_model_name = model || '';
                
                try {
                  if (assigned_user_id) {
                    const [roleRows] = await connection.query('SELECT Role_Id FROM user_details WHERE User_Details_Id = ? LIMIT 1', [assigned_user_id]);
                    if (roleRows.length > 0) assigned_role_id = roleRows[0].Role_Id || 0;
                  }
                  
                  const [jeRows] = await connection.query('SELECT Followup FROM department_status WHERE Department_Status_Id = 710 LIMIT 1');
                  if (jeRows.length > 0) je_followup = jeRows[0].Followup || 0;

                  // Fetch Country_Id based on the model name
                  if (model) {
                    const [countryRows] = await connection.query('SELECT Country_Id, Country_Name FROM country WHERE Country_Name LIKE ? AND DeleteStatus = 0 LIMIT 1', [`%${model}%`]);
                    if (countryRows.length > 0) {
                      model_country_id = countryRows[0].Country_Id;
                      final_model_name = countryRows[0].Country_Name || final_model_name;
                    } else {
                      // Automatically insert new model into country table
                      const [saveRes] = await connection.query('CALL Save_Country(0, ?, 0, ?)', [model, '']);
                      if (saveRes && saveRes[0] && saveRes[0][0] && saveRes[0][0].Country_Id_) {
                        model_country_id = saveRes[0][0].Country_Id_;
                        final_model_name = model;
                      }
                    }
                  }
                } catch (err) {
                  console.error("⚠️ Error fetching dynamic role/followup/country:", err.message);
                }

                // Now we either have a procedure to call, or we insert/update manually
                let saved_student_id = null;

                if (proc) {
                  // Case 1: Call Stored Procedure
                  const [params] = await connection.query("SELECT COUNT(*) as cnt FROM information_schema.parameters WHERE SPECIFIC_NAME = ? AND SPECIFIC_SCHEMA = DATABASE()", [proc]);
                  const pCount = params[0].cnt;

                  let spResult;
                  if (pCount === 5) {
                    [spResult] = await connection.query(`CALL ${proc}(?,?,?,?,?)`, [mysql_date, name, phone, location, model]);
                  } else if (pCount === 4) {
                    [spResult] = await connection.query(`CALL ${proc}(?,?,?,?)`, [mysql_date, name, phone, location]);
                  } else {
                    console.log(`⚠️ Unhandled parameter count ${pCount} for SP ${proc}. Expected 4 or 5.`);
                  }

                  if (spResult && spResult[0] && spResult[0][0] && spResult[0][0].Student_Id_) {
                    saved_student_id = spResult[0][0].Student_Id_;

                    // Respect User Assigned by Stored Procedure
                    if (spResult[0][0].User_Id_) {
                      assigned_user_id = spResult[0][0].User_Id_;
                      assigned_user_name = spResult[0][0].By_User_Name_ || assigned_user_name;
                      console.log(`📌 SP returned a specific user. Overriding assignment to SP user: ${assigned_user_name} (${assigned_user_id})`);
                    }

                    // Update campaign link AND assign user if configured
                    let updateQuery = "UPDATE Student SET campaign_id = ?, campaign_name = ?, form_id = ?";
                    let updateParams = [final_campaign_id, final_campaign_name, raw_form_id];

                    if (assigned_user_id) {
                      updateQuery += ", To_User_Id = ?, To_User_Name = ?, By_UserName = ?";
                      updateParams.push(assigned_user_id, assigned_user_name, assigned_user_name);
                    }
                    if (campaign_dept_id) {
                      updateQuery += ", Followup_Department_Id = ?, Followup_Department_Name = ?";
                      updateParams.push(campaign_dept_id, campaign_dept_name);
                    }
                    if (campaign_status_id) {
                      updateQuery += ", Status_Id = ?, Department_Status_Name = ?";
                      updateParams.push(campaign_status_id, campaign_status_name);
                    }
                    if (campaign_branch_id) {
                      updateQuery += ", Followup_Branch_Id = ?, Followup_Branch_Name = ?";
                      updateParams.push(campaign_branch_id, campaign_branch_name);
                    }

                    updateQuery += " WHERE Student_Id = ?";
                    updateParams.push(saved_student_id);

                    await connection.query(updateQuery, updateParams);
                    console.log(`✅ Successfully saved lead ${leadgen_id} into DB using ${proc} and linked to campaign ${final_campaign_id}, assigned to user ${assigned_user_name || 'N/A'}`);
                  } else {
                    console.log(`✅ Successfully saved lead ${leadgen_id} into DB using ${proc}, but could not link to campaign.`);
                  }
                } else {
                  // Case 2 & 3: No procedure configured, we manually process the lead
                  // if (phone) {
                    // Always insert a new student with campaign + user assignment (allowing duplicates)
                    let insertFields = "Agent_Id, Entry_date, Student_Name, Address1, Phone_Number, Student_Status_Id, Enquiry_Source_Id, Created_By, DeleteStatus, FollowUp_Count, Next_FollowUp_date, Entry_Type, Profile_Country_Id, Country_Name, Enquiry_Source_Name, Created_User, Created_On, Enquiryfor_Id, Enquirfor_Name, form_id, campaign_id, campaign_name";
                    let insertPlaceholders = "0, ?, ?, ?, ?, 0, ?, ?, 0, 0, ?, 1, ?, ?, ?, ?, ?, 0, 'Select', ?, ?, ?";
                    let insertParams = [
                      mysql_date,
                      name,
                      location || '',
                      phone,
                      campaign_enquiry_source_id || 0,
                      assigned_user_id || 0,
                      mysql_date,
                      model_country_id,
                      final_model_name,
                      campaign_enquiry_source_name || 'META',
                      assigned_user_name || '',
                      mysql_date,
                      raw_form_id,
                      final_campaign_id || 0,
                      final_campaign_name || ''
                    ];

                    const insertQuery = `INSERT INTO student (${insertFields}) VALUES (${insertPlaceholders})`;
                    const [insertResult] = await connection.query(insertQuery, insertParams);
                    saved_student_id = insertResult.insertId;
                    console.log(`✅ Inserted new lead ${saved_student_id} from Meta webhook! Linked to campaign ${final_campaign_id || 'Unknown'}, assigned to user ${assigned_user_name || 'N/A'}`);

                    // CREATE FOLLOWUP ENTRY
                    if (saved_student_id) {
                      const followupQuery = `INSERT INTO student_followup (
                                                Student_Id, Entry_date, Next_FollowUp_date, FollowUp_Difference, Department, 
                                                Status, User_Id, Branch, Remark, Remark_Id, By_User_Id, 
                                                DeleteStatus, FollowUP_Time, Actual_FollowUp_Date, Entry_Type, Branch_Name, 
                                                UserName, ByUserName, Dept_StatusName, Dept_Name, Student, FollowupBranch, FollowUp, FollowUp_Count
                                            ) VALUES (?, ?, ?, 0, ?, ?, ?, ?, '', 0, ?, 0, ?, ?, 1, ?, ?, ?, ?, ?, ?, ?, ?, 1)`;

                      const followupParams = [
                        saved_student_id,
                        mysql_date,
                        mysql_date,
                        campaign_dept_id || 0,
                        campaign_status_id || 0,
                        assigned_user_id || 0,
                        campaign_branch_id || 0,
                        assigned_user_id || 0,
                        mysql_date,
                        mysql_date,
                        campaign_branch_name || '',
                        assigned_user_name || '',
                        assigned_user_name || '',
                        campaign_status_name || '',
                        campaign_dept_name || '',
                        name || '',
                        campaign_branch_name || '',
                        je_followup
                      ];

                      const [followupResult] = await connection.query(followupQuery, followupParams);
                      const saved_followup_id = followupResult.insertId;

                      // Link Followup to Student
                      const linkQuery = `UPDATE student SET 
                                                Student_Followup_Id = ?,
                                                Next_FollowUp_date = ?,
                                                Status_Id = ?,
                                                By_User_Id = ?,
                                                To_User_Id = ?,
                                                Remark = '',
                                                Remark_Id = 0,
                                                Followup_Department_Name = ?,
                                                Department_Status_Name = ?,
                                                To_User_Name = ?,
                                                By_UserName = ?,
                                                FollowUp = ?,
                                                Followup_Department_Id = ?,
                                                Followup_Branch_Id = ?,
                                                Role_Id = ?,
                                                Branch_Id=?,
                                                Department_Id=?
                                                WHERE Student_Id = ?`;

                      await connection.query(linkQuery, [
                        saved_followup_id,
                        mysql_date,
                        campaign_status_id || 0,
                        assigned_user_id || 0,
                        assigned_user_id || 0,
                        campaign_dept_name || '',
                        campaign_status_name || '',
                        assigned_user_name || '',
                        assigned_user_name || '',
                        je_followup,
                        campaign_dept_id || 0,
                        campaign_branch_id || 0,
                        assigned_role_id,
                        campaign_branch_id || 0,
                        campaign_dept_id || 0,                       
                        saved_student_id
                      ]);

                      console.log(`✅ Created student_followup (ID: ${saved_followup_id}) and linked to Student ${saved_student_id}`);
                    }

                  // } else {
                  //   console.log(`⚠️ Could not process lead ${leadgen_id} because no phone number was provided.`);
                  // }
                }

                // 3. Send notification to assigned user (if configured and lead was saved)
                if (assigned_user_id && saved_student_id) {
                  try {
                    // Get next Notification_Id
                    const [notifIdResult] = await connection.query(
                      "SELECT COALESCE(MAX(Notification_Id), 0) + 1 AS NextId FROM Notification"
                    );
                    const newNotifId = notifIdResult[0].NextId;

                    // Insert notification for the assigned user
                    await connection.query(
                      `INSERT INTO Notification (
                                                Notification_Id, From_User, From_User_Name, To_User, To_User_Name,
                                                Status_Id, View_Status, Remark, Entry_Date, Student_Id, Student_Name,
                                                DeleteStatus, Description, Entry_Type
                                            ) VALUES (?, ?, ?, ?, ?, ?, 1, ?, NOW(), ?, ?, FALSE, ?, ?)`,
                      [
                        newNotifId,
                        0,                          // From_User (system/webhook)
                        'Meta Campaign',            // From_User_Name
                        assigned_user_id,           // To_User
                        assigned_user_name,         // To_User_Name
                        campaign_status_id || 0,    // Status_Id
                        `New lead from campaign: ${final_campaign_name || 'Unknown'}`, // Remark
                        saved_student_id,           // Student_Id
                        name,                       // Student_Name
                        'New Meta Lead Assigned',   // Description
                        3                           // Entry_Type
                      ]
                    );

                    // Update user's notification count
                    const [countResult] = await connection.query(
                      "SELECT COALESCE(MAX(Notification_Count), 0) + 1 AS Count FROM User_Details WHERE User_Details_Id = ?",
                      [assigned_user_id]
                    );
                    const newCount = countResult[0].Count;
                    await connection.query(
                      "UPDATE User_Details SET Notification_Count = ? WHERE User_Details_Id = ?",
                      [newCount, assigned_user_id]
                    );

                    // Emit real-time socket notification
                    io.emit("new-message", {
                      Student_Name: name,
                      To_User: assigned_user_id,
                      Student_Id: saved_student_id,
                      Notification_Type_Name: 'New Meta Lead Assigned',
                      From_User_Name: 'Meta Campaign'
                    });

                    console.log(`🔔 Notification sent to user ${assigned_user_name} (ID: ${assigned_user_id}) for new lead ${name}`);
                  } catch (notifErr) {
                    console.error(`⚠️ Lead saved but notification failed:`, notifErr.message);
                  }
                }
              } catch (e) {
                console.error("❌ DB Error saving lead:", e);
              } finally {
                connection.release();
              }
            } catch (err) {
              console.error("Error fetching lead details from Facebook Graph API:", err.message);
            }
          }
        }
      }
    }
  } else {
    res.sendStatus(404);
  }
});

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "http:", "https:", "data:", "blob:", "'unsafe-inline'"],
      connectSrc: ["'self'", "wss:https://sarathynotificationapi.trackbox.live"],
    },
  })
);

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("new-message", async (message) => {
    var connection;
    try {
      io.emit("new-message", message);
      const pool = db.promise();
      connection = await pool.getConnection();
      console.log("new-message socket values", message);
      const branchId = message.Branch;
      const data = message;
      if (branchId > 0) {
        const [deptStaffRows] = await connection.query(
          `SELECT * FROM user_details
        WHERE Branch_Id = ? AND DeleteStatus = FALSE AND Department_Id = 427
        ORDER BY User_Details_Id DESC LIMIT 1`,
          [branchId]
        );

        const deptStaffData =
          deptStaffRows.length > 0 ? deptStaffRows[0] : null;
        console.log("deptStaffData111", deptStaffData);

        if (deptStaffData) {
          const deptStaffId = deptStaffData.User_Details_Id;
          const From_User = data.To_User;
          const From_User_Name = data.To_User_Name || "System";
          const To_User = deptStaffData.User_Details_Id;
          const To_User_Name_ = deptStaffData.User_Details_Name;
          const Status_Id = data.Status_Id;
          const Student_Id = data.Student_Id;
          const Remark = data.Remark || "";
          const Student_Name = data.Student_Name;
          const Notification_Type_Name_ = "Student Assigned";
          const Entry_Type = 3;

          // 1?? Get next Notification_Id
          const [notificationIdResult] = await connection.query(
            `SELECT COALESCE(MAX(Notification_Id), 0) + 1 AS NextId FROM Notification`
          );
          const Notification_Id_ = notificationIdResult[0].NextId;

          // 2?? Insert new Notification
          await connection.query(
            `INSERT INTO Notification (
                Notification_Id,
                From_User,
                From_User_Name,
                To_User,
                To_User_Name,
                Status_Id,
                View_Status,
                Remark,
                Entry_Date,
                Student_Id,
                Student_Name,
                DeleteStatus,
                Description,
                Entry_Type
              )
              VALUES (?, ?, ?, ?, ?, ?, 1, ?, NOW(), ?, ?, FALSE, ?, ?)`,
            [
              Notification_Id_, // 1. Notification_Id
              From_User, // 2. From_User
              From_User_Name, // 3. From_User_Name
              To_User, // 4. To_User
              To_User_Name_, // 5. To_User_Name
              Status_Id, // 6. Status_Id
              Remark, // 7. Remark (after View_Status = 1)
              Student_Id, // 8. Student_Id
              Student_Name, // 9. Student_Name
              Notification_Type_Name_, // 10. Description
              Entry_Type, // 11. Entry_Type
            ]
          );

          // 3?? Get updated Notification_Count
          const [countResult] = await connection.query(
            `SELECT COALESCE(MAX(Notification_Count), 0) + 1 AS Count FROM User_Details WHERE User_Details_Id = ?`,
            [To_User]
          );
          const Notification_Count_ = countResult[0].Count;

          // 4?? Update User_Details with new count
          await connection.query(
            `UPDATE User_Details SET Notification_Count = ? WHERE User_Details_Id = ?`,
            [Notification_Count_, To_User]
          );

          // 5?? Emit real-time notification
          const message = {
            Student_Name: Student_Name,
            To_User: To_User,
            Student_Id: Student_Id,
          };

          io.emit("new-message", message); // Emit to all � use .to(To_User) if socket rooms used
        }
      }

      try {
        const [bdmuser] = await connection.query(
          `SELECT * FROM user_details
              WHERE DeleteStatus = FALSE AND Department_Id = 434
              order by User_Details_Id desc limit 1`
        );
        console.log("bdmuser", bdmuser);
        const bdmData = bdmuser.length > 0 ? bdmuser[0] : null;
        const From_User = data.To_User;
        const To_User = bdmData.User_Details_Id;
        const Student_Id = data.Student_Id;
        const Student_Name = data.Student_Name;
        const From_User_Name = data.To_User_Name || "System";
        const To_User_Name_ = bdmData.User_Details_Name;
        const Status_Id = data.Status_Id;
        const Remark = data.Remark || "";
        const Notification_Type_Name_ = "Student Assigned";
        const Entry_Type = 3;

        // 1?? Get next Notification_Id
        const [notificationIdResult] = await connection.query(
          `SELECT COALESCE(MAX(Notification_Id), 0) + 1 AS NextId FROM Notification`
        );
        const Notification_Id_ = notificationIdResult[0].NextId;
        console.log("Notification_Id_", Notification_Id_);

        // 2?? Insert new Notification
        await connection.query(
          `INSERT INTO Notification (
                Notification_Id,
                From_User,
                From_User_Name,
                To_User,
                To_User_Name,
                Status_Id,
                View_Status,
                Remark,
                Entry_Date,
                Student_Id,
                Student_Name,
                DeleteStatus,
                Description,
                Entry_Type
              )
              VALUES (?, ?, ?, ?, ?, ?, 1, ?, NOW(), ?, ?, FALSE, ?, ?)`,
          [
            Notification_Id_, // 1. Notification_Id
            From_User, // 2. From_User
            From_User_Name, // 3. From_User_Name
            To_User, // 4. To_User
            To_User_Name_, // 5. To_User_Name
            Status_Id, // 6. Status_Id
            Remark, // 7. Remark (after View_Status = 1)
            Student_Id, // 8. Student_Id
            Student_Name, // 9. Student_Name
            Notification_Type_Name_, // 10. Description
            Entry_Type, // 11. Entry_Type
          ]
        );

        // 3?? Get updated Notification_Count
        const [countResult] = await connection.query(
          `SELECT COALESCE(MAX(Notification_Count), 0) + 1 AS Count FROM User_Details WHERE User_Details_Id = ?`,
          [To_User]
        );
        const Notification_Count_ = countResult[0].Count;

        // 4?? Update User_Details with new count
        await connection.query(
          `UPDATE User_Details SET Notification_Count = ? WHERE User_Details_Id = ?`,
          [Notification_Count_, To_User]
        );
        const bdmmessage = {
          Student_Name: Student_Name,
          To_User: To_User,
          Student_Id: Student_Id,
        };

        io.emit("new-message", bdmmessage);
      } catch (err) {
        console.log("Error in fetching BDM user:", err);

        console.error("Error in fetching BDM user:", err);
      }
    } catch (err) {
      console.error("Error in new-message socket:", err);
    } finally {
      if (connection) connection.release();
    }
  });
});

app.listen(port, () => {
  console.log(`started on port: ${port}`);
});

app.post("/Post_FB_Lead_Immigration/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
       console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration(?,?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.DISTRICT,
        data.MODEL
      ]
    );
    connection.release();
    res.send("Success");
} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

app.post("/Post_FB_Lead_Immigration_Nexa_Klm_reshma/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
       console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration_Nexa_Klm_reshma(?,?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.DISTRICT,
        data.MODEL
      ]
    );
    connection.release();
    res.send("Success");
} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

app.post("/Post_FB_Lead_Immigration_Nexa_Tvm_rehana/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
       console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration_Nexa_Tvm_rehana(?,?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.DISTRICT,
        data.MODEL
      ]
    );
    connection.release();
    res.send("Success");
} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

app.post("/Post_FB_Lead_Immigration_2025/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
       console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration_2025(?,?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.DISTRICT,
        data.MODEL
      ]
    );
    connection.release();
    res.send("Success");
} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

app.post("/Post_FB_Lead_Immigration_Areena/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
       console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration_Areena(?,?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.DISTRICT,
        data.MODEL
      ]
    );
    connection.release();
    res.send("Success");
} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

app.post("/Post_FB_Lead_Immigration_Areena_Klm_Saranya/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
       console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration_Areena_Klm_Saranya(?,?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.DISTRICT,
        data.MODEL
      ]
    );
    connection.release();
    res.send("Success");
} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

app.post("/Post_FB_Lead_Immigration_Areena_Tvm_Navya/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
       console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration_Areena_Tvm_Navya(?,?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.DISTRICT,
        data.MODEL
      ]
    );
    connection.release();
    res.send("Success");
} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

app.post("/Post_FB_Lead_Immigration_Areena_2025/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
       console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration_Areena_2025(?,?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.DISTRICT,
        data.MODEL
      ]
    );
    connection.release();
    res.send("Success");
} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

app.post("/Post_FB_Lead_Immigration_Chetak_soja/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
     console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration_Chetak_soja(?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.LOCATION
      ]
    );
    connection.release();
    res.send("Success");

} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

app.post("/Post_FB_Lead_Immigration_Chetak_soumya/", async function (req, res) {
const pool = db.promise();
var connection = await pool.getConnection();
try {
    var data = req.body;
    let mysql_date = data.DATE.replace('T',' ').substring(0,19);
     console.log(data);
    console.log(mysql_date);
    await connection.query(
      "CALL Post_FB_Lead_Immigration_Chetak_soumya(?,?,?,?)",
      [
        mysql_date,
        data.NAME,
        data.PHONE,
        data.LOCATION
      ]
    );
    connection.release();
    res.send("Success");

} catch (err) {
    console.log(err);
    connection.release();
    res.send(err);
}
});

//google sheet
app.post("/Post_FB_Lead_Immigration_Ather_Fathima/", async function (req, res) {
   var connection;
  try {
    const lead = req.body?.data || {};
    const pool = db.promise();
     connection = await pool.getConnection();
    console.log("Sheet Name:", req.body.data);
    //const fullLead = req.body?.data || {};
const payload = {
  p_DATE : lead["created_time"] ? lead["created_time"].toString().trim() : "",
  p_NAME: lead["full name"] ? lead["full name"].toString().trim() : "",
  p_PHONE: lead["phone_number\r\n"]
      ? lead["phone_number\r\n"].toString().trim()
      : lead["phone_number"]
      ? lead["phone_number"].toString().trim()
      : "", 
  p_LOCATION: lead["which_showroom_are_you_looking_for_?"] ? lead["which_showroom_are_you_looking_for_?"].toString().trim() : "",  
  p_MODEL: lead["which_model_are_you_looking_?"] ? lead["which_model_are_you_looking_?"].toString().trim() : "",
};
   console.log(payload);
    let lt = await new storedProcedure(
      "Post_FB_Lead_Immigration_Ather_Fathima",
      [
        payload.p_DATE, 
        payload.p_NAME,
        payload.p_PHONE,          
        payload.p_LOCATION,
        payload.p_MODEL
      ],
      connection
    ).result();

    console.log("lt: ", lt);
    res.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false });
  } finally {
    if (connection) connection.release();
  }
});

app.post("/Post_FB_Lead_Immigration_Ather_Varasha/", async function (req, res) {
var connection;
  try {
    const lead = req.body?.data || {};
    const pool = db.promise();
     connection = await pool.getConnection();
    console.log("Sheet Name:", req.body.data);
    //const fullLead = req.body?.data || {};
const payload = {
  p_DATE : lead["created_time"] ? lead["created_time"].toString().trim() : "",
  p_NAME: lead["full name"] ? lead["full name"].toString().trim() : "",
  p_PHONE: lead["phone_number\r\n"]
      ? lead["phone_number\r\n"].toString().trim()
      : lead["phone_number"]
      ? lead["phone_number"].toString().trim()
      : "", 
  p_LOCATION: lead["which_showroom_are_you_looking_for_?"] ? lead["which_showroom_are_you_looking_for_?"].toString().trim() : "",  
  p_MODEL: lead["which_model_are_you_looking_?"] ? lead["which_model_are_you_looking_?"].toString().trim() : "",
};
   console.log(payload);
    let lt = await new storedProcedure(
      "Post_FB_Lead_Immigration_Ather_Varasha",
      [
        payload.p_DATE, 
        payload.p_NAME,
        payload.p_PHONE,          
        payload.p_LOCATION,
        payload.p_MODEL
      ],
      connection
    ).result();

    console.log("lt: ", lt);
    res.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false });
  } finally {
    if (connection) connection.release();
  }
});

app.post("/Post_FB_Lead_Immigration_Bajaj/", async function (req, res) {
var connection;
  try {
    const lead = req.body?.data || {};
    const pool = db.promise();
     connection = await pool.getConnection();
    console.log("Sheet Name:", req.body.data);
    //const fullLead = req.body?.data || {};
const payload = {
  p_DATE : lead["created_time"] ? lead["created_time"].toString().trim() : "",
  p_NAME: lead["full name"] ? lead["full name"].toString().trim() : "",
  p_PHONE: lead["phone\r\n"]
      ? lead["phone\r\n"].toString().trim()
      : lead["phone"]
      ? lead["phone"].toString().trim()
      : "", 
  p_LOCATION: lead["which_area_in_kollam_district_are_you_located_in?_(our_services_are_available_only_in_kollam_district)"] ? lead["which_area_in_kollam_district_are_you_located_in?_(our_services_are_available_only_in_kollam_district)"].toString().trim() : "",  
  p_MODEL: lead["which_model_are_you_looking_for"] ? lead["which_model_are_you_looking_for"].toString().trim() : "",
};
   console.log(payload);
    let lt = await new storedProcedure(
      "Post_FB_Lead_Immigration_Bajaj",
      [
        payload.p_DATE, 
        payload.p_NAME,
        payload.p_PHONE,          
        payload.p_LOCATION,
        payload.p_MODEL
      ],
      connection
    ).result();

    console.log("lt: ", lt);
    res.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false });
  } finally {
    if (connection) connection.release();
  }
});

app.post("/Post_FB_Lead_Immigration_Triumph/", async function (req, res) {
var connection;
  try {
    const lead = req.body?.data || {};
    const pool = db.promise();
     connection = await pool.getConnection();
    console.log("Sheet Name:", req.body.data);
    //const fullLead = req.body?.data || {};
const payload = {
  p_DATE : lead["created_time"] ? lead["created_time"].toString().trim() : "",
  p_NAME: lead["full name"] ? lead["full name"].toString().trim() : "",
  p_PHONE: lead["phone_number\r\n"]
      ? lead["phone_number\r\n"].toString().trim()
      : lead["phone_number"]
      ? lead["phone_number"].toString().trim()
      : "", 
  p_LOCATION: lead["your_district"] ? lead["your_district"].toString().trim() : "",  
  p_MODEL: lead["which_model_are_you_looking_for?"] ? lead["which_model_are_you_looking_for?"].toString().trim() : "",
};
   console.log(payload);
    let lt = await new storedProcedure(
      "Post_FB_Lead_Immigration_Triumph",
      [
        payload.p_DATE, 
        payload.p_NAME,
        payload.p_PHONE,          
        payload.p_LOCATION,
        payload.p_MODEL
      ],
      connection
    ).result();

    console.log("lt: ", lt);
    res.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false });
  } finally {
    if (connection) connection.release();
  }
});

app.post("/Post_FB_Lead_Immigration_Ktm/", async function (req, res) {
var connection;
  try {
    const lead = req.body?.data || {};
    const pool = db.promise();
     connection = await pool.getConnection();
    console.log("Sheet Name:", req.body.data);
    //const fullLead = req.body?.data || {};
const payload = {
  p_DATE : lead["created_time"] ? lead["created_time"].toString().trim() : "",
  p_NAME: lead["full name"] ? lead["full name"].toString().trim() : "",
  p_PHONE: lead["phone_number\r\n"]
      ? lead["phone_number\r\n"].toString().trim()
      : lead["phone_number"]
      ? lead["phone_number"].toString().trim()
      : "", 
  p_LOCATION: lead["select_your_location"] ? lead["select_your_location"].toString().trim() : "",  
  p_MODEL: lead["which_model_are_you_looking_for_?"] ? lead["which_model_are_you_looking_for_?"].toString().trim() : "",
};
   console.log(payload);
    let lt = await new storedProcedure(
      "Post_FB_Lead_Immigration_Ktm",
      [
        payload.p_DATE, 
        payload.p_NAME,
        payload.p_PHONE,          
        payload.p_LOCATION,
        payload.p_MODEL
      ],
      connection
    ).result();

    console.log("lt: ", lt);
    res.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false });
  } finally {
    if (connection) connection.release();
  }
});

app.use(jwt());

//app.use(SESClient)
app.use(apppath + "User_Details", User_Details);
app.use(apppath + "Country", Country);
app.use(apppath + "Course", Course);
app.use(apppath + "Course_Intake", Course_Intake);
app.use(apppath + "Document", Document);
app.use(apppath + "Duration", Duration);
app.use(apppath + "Intake", Intake);
app.use(apppath + "Internship", Internship);
app.use(apppath + "Level_Detail", Level_Detail);
app.use(apppath + "Student", Student);
app.use(apppath + "Student_Document", Student_Document);
app.use(apppath + "Student_Message", Student_Message);
app.use(apppath + "Student_Status", Student_Status);
app.use(apppath + "Subject", Subject);
app.use(apppath + "Remarks", Remarks);
app.use(apppath + "Enquiry_Source", Enquiry_Source);
app.use(apppath + "University", University);
app.use(apppath + "Department", Department);
app.use(apppath + "Department_Status", Department_Status);
app.use(apppath + "Branch", Branch);
app.use(apppath + "Brand", Brand);
app.use(apppath + "DSE", DSE);
app.use(apppath + "Fees", Fees);
app.use(apppath + "User_Role", User_Role);
app.use(apppath + "Company", Company);
app.use(apppath + "Sub_Section", Sub_Section);
app.use(apppath + "Check_List", Check_List);
app.use(apppath + "Agent_Details", Agent_Details);
app.use(apppath + "Task", Task);
app.use(apppath + "Application_Status", Application_Status);
app.use(apppath + "Application_Group", Application_Group);
app.use(apppath + "Accounts", Accounts);
app.use(apppath + "Class", Class);
app.use(apppath + "Notes", Notes);
app.use(apppath + "Chat_Window", Chat_Window);
app.use(apppath + "Email_Template", Email_Template);
app.use(apppath + 'Enquiry_For',Enquiry_For);
app.use(apppath + "Location",Location);
app.use(apppath + "Status_Duration",Status_Duration),
app.use(apppath + "user_target",user_target);

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.get("Edabraod/", (req, res) => {
  res.send("Hello World!");
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
module.exports = app;