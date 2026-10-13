
var mysql = require("mysql2");
var connection = mysql.createPool({
    host: "localhost",
   user: "root",
   password: "root123",
   database: "sarathy_lead_db_v1" 
});
module.exports = connection;

