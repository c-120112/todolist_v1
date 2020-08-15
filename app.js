//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//starting out using an array to store the new items so that there can be multiple entries.
let items = [];


app.use(bodyParser.urlencoded({
  extended: true
}));

//Telling our server to serve up the public folder as a static resource.
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  let today = new Date();

  //options for displayed day/date/time,etc. is a JS object
  //see https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date for additional option keys examples.
  let options = {

    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",

  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {

  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
