//jshint esversion:6
const express = require('express');

const body-parser = require(body-parser);

const ejs = require('ejs');

const app = express();

//for able to access static folders like css
app.use(express.static("public"));
//for setting up ejs
app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));



app.listen(3000, function(){

  console.log("Server started on port 3000");
})
