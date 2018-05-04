

var path =require("path");
var friendsArray = require("../data/friends");

// The following is the first piece of matching logic
var newArray = friendsArray.map(function(friend) {
    return friend.scores.reduce(function(total, score){
            return total + score;
    });
});

var finalArray = [];
var userScore = 0

module.exports = function(app) {
    // when hit with a request of a "/", returns the front page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //  when the user clicks the "Take the Survey" button the survey pape is returned
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });    
    // When the user finishes the questions and clicks the "submit" button
    // the following logic kicks off, which determnes the best match.
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
        // The following logs the selected match to the command terminal
        console.log("The best match is " + friendsArray[minIndex].name);       
        
        
    });
};