const express = require("express");
const router = express.Router();
const mongo = require("mongodb");
const fs = require("fs");
const monk = require("monk");
var db;

fs.readFile("db.json", "utf8", function(err,data){
  var dbinfo = JSON.parse(data);
  var creds = dbinfo.creds;
  var hostname = dbinfo.hostname;
  db = monk(`mongodb://${creds.user}:${creds.password}@${hostname}`);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  const options = {
    root: './views'
  }
  res.sendFile('index.html', options);
});


/* GET cards */
router.get("/allfriends", function(req, res, next){
  var collection = db.get("friends");
  collection.find({},{fields: '-_id', sort: {birthdate: 1}})
    .then(result=>{
      res.json(result);
    });
});

module.exports = router;
