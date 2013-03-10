// Generated by CoffeeScript 1.6.1
var assert, base64, vows;

vows = require("vows");

assert = require("assert");

require("seajs");

require("../etc/env");

base64 = require("../util/0.1.2/src/base64/base64");

vows.describe("Test Encode").addBatch({
  "Chinese": {
    topic: function() {
      return base64.encode("春眠不觉晓，处处闻啼鸟");
    },
    "output is string": function(topic) {
      assert.equal(typeof topic, "string");
      return null;
    }
  }
})["export"](module);