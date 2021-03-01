//jshint esversion:6
const express = require('express');

const bodyParser = require('body-parser');

const ejs = require('ejs');

const app = express();

const mongoose = require('mongoose');

//for able to access static folders like css
app.use(express.static("public"));
//for setting up ejs
app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));



app.get("/" , function(req , res){

  res.render('home');
});

app.get("/login" , function(req , res){

  res.render('login');
});

app.get("/register" , function(req , res){

  res.render('register');
});

app.post("/register" , function(req , res){

  res.send("ok!");

});

app.post("/login" , function(req , res){
res.send("ok!");

})

app.listen(3000, function(){

  console.log("Server started on port 3000");
})
