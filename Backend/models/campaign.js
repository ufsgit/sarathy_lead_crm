// src/models/campaign.js
var db = require('../dbconnection');

var Campaign = {
  Save_Campaign: function (campaign_, callback) {
    console.log(campaign_);
    let campaign_department_users_ = campaign_.Campaign_Department_Users_Data;
    var campaign_department_value_ = 0;
    if (campaign_department_users_ != undefined && campaign_department_users_ != "" && campaign_department_users_ != null) {
      campaign_department_value_ = 1;
    }
    campaign_department_users_ = JSON.stringify(campaign_.Campaign_Department_Users_Data)
    console.log('campaign_department_users_: ', campaign_department_users_);
    console.log(campaign_department_value_);

    let dept_id = campaign_.Department_Id;
    let to_user_id = campaign_.to_user_id;
    let status_id = campaign_.Department_Status_Id;
    let to_user_name = campaign_.To_User_Name || null;
    let follow_up = campaign_.FollowUp != null ? campaign_.FollowUp : null;
    let follow_up_id = campaign_.FollowUp_Id || null;

    if (campaign_.Campaign_Department_Users_Data && campaign_.Campaign_Department_Users_Data.length > 0) {
      let firstRow = campaign_.Campaign_Department_Users_Data[0];
      if (!dept_id) dept_id = firstRow.Department_Id;
      if (!to_user_id) to_user_id = firstRow.To_User_Id;
      if (!status_id) status_id = firstRow.Status_Id;
      if (!to_user_name) to_user_name = firstRow.To_User_Name || null;
      if (follow_up == null && firstRow.FollowUp != null) follow_up = firstRow.FollowUp;
      if (!follow_up_id) follow_up_id = firstRow.FollowUp_Id || null;
    }

    db.query("CALL Save_Campaign(" +
      "@campaign_details_id_ :=?," +
      "@campaign_id_ :=?," +
      "@campaign_name_ :=?," +
      "@Branch_Id_ :=?," +
      "@Department_Id_ :=?," +
      "@to_user_id_ :=?," +
      "@Enquiry_Source_Id_ :=?," +
      "@Department_Status_Id_ :=?," +
      "@form_id_ :=?," +
      "@form_name_ :=?," +
      "@procedure_name_ :=?," +
      "@To_User_Name_ :=?," +
      "@FollowUp_ :=?," +
      "@FollowUp_Id_ :=?" +
      ")",
      [
        campaign_.campaign_details_id,
        campaign_.campaign_id,
        campaign_.campaign_name,
        campaign_.Branch_Id,
        dept_id,
        to_user_id,
        campaign_.Enquiry_Source_Id,
        status_id,
        campaign_.form_id,
        campaign_.form_name || null,
        campaign_.procedure_name,
        to_user_name,
        follow_up,
        follow_up_id
      ],
      function (err, result) {
        if (err) return callback(err, null);

        let saved_id = result && result[0] && result[0][0] ? result[0][0].campaign_Id_ : campaign_.campaign_details_id;

        if (saved_id && campaign_.Campaign_Department_Users_Data && campaign_.Campaign_Department_Users_Data.length > 0) {
          // Sync Round-Robin Users
          db.query("DELETE FROM campaign_users WHERE campaign_details_id = ?", [saved_id], function (delErr) {
            let promises = campaign_.Campaign_Department_Users_Data.map((row, index) => {
              if (row.To_User_Id) {
                return db.promise().query(
                  "INSERT INTO campaign_users (campaign_details_id, user_id, user_name, sort_order, is_active) VALUES (?, ?, ?, ?, 1)",
                  [saved_id, row.To_User_Id, row.To_User_Name, index]
                );
              }
              return Promise.resolve();
            });
            Promise.all(promises).then(() => {
              callback(null, result);
            }).catch(pErr => callback(pErr, null));
          });
        } else {
          callback(null, result);
        }
      }
    );
  },

  Search_Campaign: function (campaign_name, branch_id, department_id, form_id, callback) {
    return db.query(
      "CALL Search_Campaign(@campaign_name_search :=?, @Branch_Id_ :=?, @Department_Id_ :=?, @form_id_ :=?)",
      [
        campaign_name || '',
        Number(branch_id) || 0,
        Number(department_id) || 0,
        form_id || ''
      ],
      callback
    );
  },

  Delete_Campaign: function (campaign_id, callback) {
    return db.query("CALL Delete_Campaign(@campaign_id_ :=?)",
      [campaign_id],
      callback
    );
  },
  get_campaigne_department_details: function (campaign_details_id_, callback) {
    return db.query(
      "CALL get_campaigne_department_details(?)",
      [campaign_details_id_],
      callback
    );
  },
  Get_Campaign_Dashboard_Summary: function (callback) {
    return db.query(`
      SELECT 
        c.campaign_details_id, 
        c.campaign_name, 
        c.campaign_id,
        b.Branch_Name,
        COUNT(s.Student_Id) AS Total_Leads
      FROM campaign_details c
      LEFT JOIN branch b ON c.Branch_Id = b.Branch_Id
      LEFT JOIN Student s ON c.campaign_details_id = s.campaign_id AND s.DeleteStatus = 0
      WHERE c.Delete_Status = 0
      GROUP BY c.campaign_details_id, c.campaign_name, c.campaign_id, b.Branch_Name
      ORDER BY c.campaign_details_id DESC
    `, callback);
  },
  Get_Campaign_Leads: function (campaign_id, callback) {
    return db.query(`
      SELECT 
        Student_Id,
        Student_Name,
        Phone_Number,
        Entry_Date,
        Department_Status_Name,
        By_UserName
      FROM Student 
      WHERE campaign_id = ? AND DeleteStatus = 0
      ORDER BY Student_Id DESC
    `, [campaign_id], callback);
  }

};

module.exports = Campaign;