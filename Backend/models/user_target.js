var db = require('../dbconnection');
var fs = require('fs');
const storedProcedure = require('../helpers/stored-procedure');
const { Console } = require('console');
var user_target =
{
  Save_User_Target: function (User_Target_, callback) {
     console.log(User_Target_);
    return db.query("CALL Save_User_Target(" +
      "@User_Target_Id_ :=?," +
      "@User_Taget_No_ :=?," +
      "@User_Month_Id_ :=?," +
      "@User_Month_Name_ :=?," +
      "@User_Target_Year_ :=?," +
      "@User_Id_ :=?," +
      "@User_Name_ :=?"+
      ")"
      , [User_Target_.User_Target_Id,        // 1
      User_Target_.User_Taget_No,      // 2
      User_Target_.User_Month_Id,      // 3
      User_Target_.User_Month_Name,    // 4
      User_Target_.User_Target_Year,          // 5
      User_Target_.User_Id,
      User_Target_.User_Name
      ], callback);
  },

  Load_User_Month: function (callback) {
    return db.query("CALL Load_User_Month()", [], callback);
  },

    Load_User_Details: function (callback) {
    return db.query("CALL Load_User_Details()", [], callback);
  },

  Delete_User_Target: function (User_Target_Id_, callback) {
    return db.query("CALL Delete_User_Target(@User_Target_Id_ :=?)", [User_Target_Id_], callback);
  },

  Search_User_Target: function (User_Taget_No_, User_Month_Id_, User_Id_, callback) {
    if (User_Taget_No_ === 'undefined' || User_Taget_No_ === '' || User_Taget_No_ === undefined)
      User_Taget_No_ = 0;

    return db.query("CALL Search_User_Target(@User_Taget_No_ :=?,@User_Month_Id_ :=?,@User_Id_:=?)", 
      [User_Taget_No_, User_Month_Id_, User_Id_], callback);
  },

  Search_Company: function (callback) {
    return db.query("CALL Search_Company()", [], callback);
  }
};
module.exports = user_target;