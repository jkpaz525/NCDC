var Plotly = require('plotly')("jpaz", "EfWMaW48cg3uSzTVUYxP")

var mysql = require('mysql');

var d3 = require("d3");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var fetch = require("fetch");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1",
  database: "disaster_db"
});

var hail_events = con.connect(function(err) {
  if (err) throw err;
  con.query("select year, count(YEAR),from disaster, where event_type='HAIL', group by YEAR", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

var tornado_events = con.connect(function(err) {
    if (err) throw err;
    con.query("select year, count(YEAR),from disaster, where event_type='TORNADO', group by YEAR", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  var flood_events = con.connect(function(err) {
    if (err) throw err;
    con.query("select year, count(YEAR),from disaster, where event_type='FLOOD', group by YEAR", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  var flash_events = con.connect(function(err) {
    if (err) throw err;
    con.query("select year, count(YEAR),from disaster, where event_type='FLASH FLOOD', group by YEAR", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  var dust_events = con.connect(function(err) {
    if (err) throw err;
    con.query("select year, count(YEAR),from disaster, where event_type='DUST_DEVIL', group by YEAR", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
    var trace1 = {
      x: [2014, 2015, 2016, 2017, 2018],
      y: [hail_events,tornado_events,flood_events,flash_events,dust_events],
      type: "line"
    };
    var data =[trace1];
  
    var layout = {
      height: 600,
      width: 800
    };
  
    Plotly.plot("line", data, layout);


    var month_events = con.connect(function(err) {
      if (err) throw err;
      con.query("select MONTH_NAME, count(MONTH_NAME),from disaster, group by MONTH_NAME", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });
  
  var trace2 = {
    x : ["March", "November","January","February","April","September","December","October", "May", "July", "June","August"],
    y : month_events,
    type:"pie"
  };
  var data2 =[trace2];
  
  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data2, layout);

  
  