
var path =require("path");
var friendsArray = require("../data/friends");

module.exports = function(app) {
    // The following is triggered when the user clicks on the
    // Friends Info button on the front page.  It return infoamation
    // about all the potential matches in JSON format. 
    app.get("/api/friends", function(req, res) {
        // console.log("pass");
        res.json(friendsArray);        
    });

    // app.post("/api/friends", function(req, res) {
    //     friendsArray.push(req.body);
    // });
};