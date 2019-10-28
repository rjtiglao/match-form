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
        // console.log(newData);
        
        var user = req.body.routeName;
        var matchNum = 0;
        var userMatch = 0;
        var userRoute;
        
        
        console.log(`hic ${parseInt(newData.scores)}`);

        //This will handle compatibility logic
        for(let i=0; friendsData.length > i; i++){
            let firstRound = false;
            console.log(`hic 2 ${friendsData[i].scores}`);
            console.log(`Loop # ${i} starts now`);
            console.log(`${friendsData[i].scores.length - 1}`);
            for(let k=0; newData.scores.length > k; k++){
                let numDiff = Math.abs(friendsData[i].scores[k] - newData.scores[k]);
                matchNum = matchNum + numDiff;

                console.log(matchNum);
            };
            console.log(`Loop # ${i} ends now`);
    
            if(matchNum > userMatch & firstRound === false){
                userMatch = matchNum; 
                console.log("First round complete");
                userRoute = friendsData[i].routeName;
                firstRound = true;
            }
            else{
                userMatch = matchNum; 
                console.log("match is greater than userMatch");
                userRoute = friendsData[i].routeName;
            }
            
        matchNum = 0; 
        };
        console.log(`${userRoute} was matched.`);
        friendsData.push(newData);
        res.json(newData);
    });


};
