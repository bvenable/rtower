#!/usr/bin/env node
var Browser = require("zombie");
var assert = require("assert");
browser = new Browser();
browser.visit('file://home/spif/src/rtower/index.html').
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
