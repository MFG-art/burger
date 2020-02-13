$("#submitBurger").on("click", function(event) {
  event.preventDefault();
  var newBurger = {
    burger_name: $("#inputBurger").val()
  };

  console.log(newBurger);

  //   Send the PUT request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(function() {
    console.log("Created new burger!");
    // Reload the page to get the updated list
    location.reload();
  });
});

$(".devour").on("click", function(event) {
  event.preventDefault();
  var id = $(this).data().id;
  var currentState = $(this).data().state;
  var newState = currentState === 1 ? (currentState = 0) : (currentState = 1);

  var data = {
    state: newState
  };

  queryURL = "/api/burgers/" + id;

  console.log(newState);

  // Send the PUT request.
  $.ajax(queryURL, {
    type: "PUT",
    data: data
  }).then(function() {
    console.log("Devoured new burger!");
    // Reload the page to get the updated list
    location.reload();
  });
});
