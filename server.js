
var express = require("express");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//App is listening on port


app.listen(PORT, function(){
    console.log ("Server now listening on port" + PORT);
})