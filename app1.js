/**
 * Created by abc on 16/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a', function(req,res) {
    res.send("Hello Sunil");
});

app.post('/a', function(req, res) {
    res.send("Hello Sunil form post");
});

app.listen(3000, function(){
    console.log("Hello server 3000 started");
});