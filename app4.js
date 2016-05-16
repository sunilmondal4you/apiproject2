/**
 * Created by abc on 16/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a/:name/:email',function(req,res) {
    var name=req.params.name;
    var email=req.params.email;
    res.send("Hello "+name+", your email is "+email);
});

app.listen(3003,function () {
    console.log("server 3003 is also started.");
});