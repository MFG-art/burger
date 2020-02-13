var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    data = JSON.parse(JSON.stringify(data));
    var burger = {
      burger: data
    };
    console.log(burger);
    res.render("index", burger);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("This is the request body!");
  console.log(req.body);
  burger.insert(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    res.json(result);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  console.log("in burgers_controller: " + req.body);
  burger.update(req.body.state, req.params.id, function(result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
