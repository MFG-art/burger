// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(data, cb) {
    console.log("This is what insertOne() receives: ");
    console.log(data);
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?);";
    connection.query(queryString, data, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(data, id, cb) {
    var queryString = "UPDATE burgers";
    queryString += " SET devoured = ?";
    queryString += " WHERE id = ?";

    console.log(queryString);
    console.log("data in ORM: " + data);
    connection.query(queryString, [data, id], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model
module.exports = orm;
