var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
 
var app = express();

var port = process.env.PORT || 3000;
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function() {
    console.log("server started on port " + port);
});



// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// app.get("/app/public/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });node 