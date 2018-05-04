

var path =require("path");
var friendsArray = require("../data/friends");

// console.log(friendsArray);

var newArray = friendsArray.map(function(friend) {
    return friend.scores.reduce(function(total, score){
            return total + score;
    });
});

// console.log(newArray);

var finalArray = [];

var userScore = 0

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });    

    app.post("/survey", function(req,res) {
        // console.log(req.body);        
        userScore = parseInt(req.body.q1) + parseInt(req.body.q2) + parseInt(req.body.q3) + parseInt(req.body.q4) + parseInt(req.body.q5) + parseInt(req.body.q6) + parseInt(req.body.q7) + parseInt(req.body.q8) + parseInt(req.body.q9) + parseInt(req.body.q10);
        for (var i = 0; i < newArray.length; i++) {
            finalArray.push(Math.abs(newArray[i] - userScore));
        };

        var min = finalArray[0];
        var minIndex = 0;

        for (var i = 1; i < finalArray.length; i++) {
            if (finalArray[i] < min) {
                minIndex = i;
            };
        };

        console.log("The best match is " + friendsArray[minIndex].name);       
        
        
    });
};