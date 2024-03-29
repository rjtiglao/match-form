
// Libraries
var express = require("express");
const path = require("path");


// constructor
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/css'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static('public'))


// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//LISTENER
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});