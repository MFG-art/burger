// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insert: function(data, cb) {
    orm.insertOne(data, function(res) {
      cb(res);
    });
  },
  update: function(data, id, cb) {
    console.log("data in burger.js:  " + data);
    orm.updateOne(data, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;
