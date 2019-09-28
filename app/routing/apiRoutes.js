// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");



// ===============================================================================
// DATA LOAD
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

// API 
module.exports = function(app) {


    app.get("/api/friends",function(req,res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(res,req){
        //This will handle survey results
        friendsData.push(req.body);
        res.json(true);
    

        //This will handle compatibility logic
        // PUT CODE HERE


    });


};
