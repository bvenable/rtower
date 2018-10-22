#!/usr/bin/env node
var path = require("path");
var util = require("util");
var Browser = require("zombie");
var assert = require("assert");
browser = new Browser();
var indexfile = util.format('file://%s/index.html', path.resolve(path.dirname('.')));
browser.visit(indexfile).
 then(function() {
  datafile = browser.query("#datafile");
  dfchildren = datafile.childNodes
  for(var i in dfchildren) {
   if(i.match(/[0-9]/) != null) {
    if(dfchildren[i].childNodes['0'].textContent == null) {
     console.log(dfchildren[i].textContent);
    } else {
     for(var j in dfchildren[i].childNodes) {
      if(j.match(/[0-9]/) != null) {
       if(dfchildren[i].childNodes[j].textContent != '') {
        console.log(dfchildren[i].childNodes[j].textContent);
       }
      }
     }
    }
   }
  }
 });
