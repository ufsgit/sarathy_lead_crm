var express = require('express');
var router = express.Router();
var user_target = require('../models/user_target');

router.post('/Save_User_Target/', function (req, res, next) {
  try {
    console.log(req.body);
    user_target.Save_User_Target(req.body, function (err, rows) {
      if (err) {
        console.log("err", err);
        res.json(err);
      }
      else {
        console.log(rows);
        res.json(rows);
      }
    });
  }
  catch (e) {
    console.log("e", e);
  }
  finally {
  }
});

router.get('/Search_User_Target/:User_Taget_No_?/:User_Month_Id_?/:User_Id_?', function (req, res, next) {
  try {
    user_target.Search_User_Target(req.params.User_Taget_No_, req.params.User_Month_Id_, req.params.User_Id_, function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  catch (e) {
  }
  finally {
  }
});

router.get('/Load_User_Month/', function (req, res, next) {
  try {
    user_target.Load_User_Month(function (err, rows) {
      if (err) {

        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  catch (e) {

  }
  finally {
  }
});

router.get('/Load_User_Details/', function (req, res, next) {
  try {
    user_target.Load_User_Details(function (err, rows) {
      if (err) {

        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  catch (e) {

  }
  finally {
  }
});

router.get('/Delete_DSE/:DSE_Id_?', function (req, res, next) {
  try {
    user_target.Delete_DSE(req.params.DSE_Id_, function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  catch (e) {
  }
  finally {
  }
});

router.get('/Search_Company/', function (req, res, next) {
  try {
    user_target.Search_Company(function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  catch (e) {
  }
  finally {
  }
});

module.exports = router;