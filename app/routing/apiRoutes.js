// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
// var path = require("path");



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

    app.post("/api/friends", function(req,res){
        //This will handle survey results

        var newData = req.body;
        console.log(newData);
        
        var user = req.body.routeName;
        console.log(user);

        // console.log(friendsData);

        //This will handle compatibility logic
        for(let i=0; friendsData.length > i; i++){
           if(friendsData[i].scores)
            
            console.log(friendsData[i].scores);
            console.log(i);
            
        }

        friendsData.push(newData);
    });


};
