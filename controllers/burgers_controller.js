const express = require("express");
const router = express.Router();

const burger = require ("../models/burger.js");


//Creates routes
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  

//Creates new burger  POST!
router.post('/api/create', function (req, res) {
    burger.create ([
        "burger_name", "ate"
    ], [
        req.body.burger_name, req.body.ate
    ], function(result) {
        res.json({ id: result.insertId });
    });
});