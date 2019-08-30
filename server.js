//=========================================================================
//server.js-This is the initial starting point for the node/express server.
//=========================================================================
//dependicies

var express = require("express");

//sets up express app

var app = express();
var PORT = process.env.PORT || 7500;

//requiring our models for syncing

var db = require("./models");

//sets up the express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static("public"));

//routes
require("./routes/html-routes.js")(app);
require("./routes/products-api-routes.js")(app);

//syncing our sequlize models and then starting our express app

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    });
});