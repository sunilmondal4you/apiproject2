/**
 * Created by abc on 16/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
 var user={"headers":req.headers}
    res.send(user);
});

app.get('/b',function(req,res) {
    req.headers.name="sunil mondal";
    var username={"headers":req.headers.name}
    res.send(username);
});

app.post('/a',function(req,res) {
    req.headers.email="sunilmondal4you@gmail.com";
    var email={"header":req.headers.email}
    res.send(email);
});

app.listen(3002,function () {
    console.log("Server 3002 is started now.");
});