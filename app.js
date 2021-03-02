//jshint esversion:6
const express = require('express');

const bodyParser = require('body-parser');

const ejs = require('ejs');

const app = express();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin-kshitij:Test123@cluster0.cdg7o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,{
  useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
} )

const userSchema = {
  email : String,
  password : String
}

const User = mongoose.model('User' , userSchema);



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

  const new_user = new User({
    email : req.body.username,
    password : req.body.password
  });

  new_user.save(function(err){

    if(err){
      console.log(err);
    }

    else{
      res.render('secrets');
    }
  })

});

app.post("/login" , function(req , res){

  const curr_email = req.body.username;
  const curr_password = req.body.password;

  User.findOne({email : curr_email} , function(err , result){

    if(err || result == null){

      res.send("Invalid!");
    }

    else{

      if(result.password == curr_password){

        res.render("secrets");
      }

      else{

        res.send("Invalid");
      }
    }
  })
})

app.listen(3000, function(){

  console.log("Server started on port 3000");
})
