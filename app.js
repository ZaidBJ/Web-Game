var express = require("express");
var app= express();
var mongoose= require("mongoose");
var jwt =require("jsonwebtoken");
var bcrypt=require("bcrypt-nodejs");
var BodyParser= require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/data");
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


var blackSchema= new mongoose.Schema({
  token:{type:String}
});
var BlackList =mongoose.model("blackList",blackSchema);
var userSchema= new mongoose.Schema({
  name:{ type:String},password:{ type:String}
});
var User=mongoose.model('user',userSchema);
var text;
var tok="";



///////////////////////////////////////////////////
function check_cookies(req,res)
{


  for(var i=0;i<req.headers.cookie.length;i++)
  {if(req.headers.cookie[i]==";")
text="";
  else {

    if(text==" m=")
    text="";

text+=req.headers.cookie[i];
    }
  }


///////in case someone copies jwt ////////////////////////////////////
/////////////////jwt blacklist////////////////////////////////////////////
BlackList.find({token:text},function(err,checking){
if(checking.length<1)
  jwt.verify(text,"aaaa",function(err,decoded){

    if(err)
  res.sendFile(__dirname + "/k.html");
    else{
      User.findOne({_id:decoded.userid},function(err,user){
  if(user)
    res.render("home.ejs",{name:user.name});
      });

  }
  });
else {
  res.send("invalid attempt");
}

});

}
///////////////////////////////








///////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/logn",function(req,res){

  if(req.headers.cookie){

check_cookies(req,res);

}
else {
  res.sendFile( __dirname +"/k.html");
}
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/SignUp",function(req,res){
console.log(req.body);
  bcrypt.hash(req.body.password,null,null,function(err,hash){
  User.create({name:req.body.name,password:hash},function(err,user){
    console.log("user created : " + user);
    var token =jwt.sign({userid:user._id},"aaaa");
    var m="ke"
      res.setHeader("Set-Cookie", ["m=" + token]);
    res.render("home.ejs");
  });
});

});


/////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/SignUp",function(req,res){
  if(req.headers.cookie)
check_cookies(req,res);
else {
  res.sendFile(__dirname+"/Signup.html")
}

})




/////////////////////////////////////////////////////////////////
app.post("/logn",function(req,res){
User.findOne({name:req.body.name},function(err,user){

if(user){
  bcrypt.compare(req.body.password,user.password,function(err,check){
  if(check)
{var token =jwt.sign({userid:user._id},"aaaa");
var m="ke"
  res.setHeader("Set-Cookie", ["m=" + token]);

res.render("home.ejs",{name:req.body.name});


}
else {
  res.send("Wrong Credentials");
}

});
}
else {
  res.send("Please Sign Up");
}
});
});

app.listen(3000,function(){
  console.log("listening");
});


///////////////////////////////////////////////////////////////////////////////

app.get("/logout",function(req,res){

res.redirect("/logn");
});

////////////////////////////////////////////////////////////////////////////////
app.post("/logout",function(req,res){

  BlackList.create({token:req.body.cookie},function(err,list){

    });



});

///////////////////////////////////////////////////////////////////////////////

app.get("/singleGame",function(req,res){
  res.render( "single.ejs");
});
