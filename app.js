// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the signup.html file
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// Route to handle form submission on signup.html
app.post("/", function (req, res) {
  // Extract data from the request body
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  // Log the form data to the console
  console.log(firstName, lastName, email);
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log("Server is live!!");
});
