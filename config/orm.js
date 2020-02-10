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
    var queryString =
      "INSERT INTO burgers (burger_name, devoured) VALUES (??, ??)";
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(data, cb) {
    var queryString = "UPDATE burgers;";
    queryString += " SET ";
    queryString += objToSql(vals);
    queryString += " WHERE id = " + id;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model
module.exports = orm;
