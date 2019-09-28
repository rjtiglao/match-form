
// Libraries
const express = require("express");
const path = require("path");


// constructor
var app = express();
const PORT = 8081;


// sets up the express app to handle data parsing
app.unsubscribe(express.urlencoded({extended: true}));
app.use(express.json());


// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//LISTENER
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});