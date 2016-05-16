/**
 * Created by abc on 16/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function (req,res) {
    res.send("Hello Mr.");
});

app.get('/b', function(req,res) {
    var name = req.query.name;
    var email= req.query.email;
    res.send("Hello " +name+" "+"your email id is "+email );
});

app.get('/c',function(req,res) {
    var name={"firstname":req.query.name};
    res.send(name);
});

app.post('/a',function(req,res) {
    res.send("Hello you to.");
});

app.post('/b',function(req,res) {
   res.send(req.body);
});

app.post('/c',function(req,res) {
    var name=req.send;
    res.send(name);
})

app.listen(3001,function() {
    console.log("Server 3001 srarted.")
})