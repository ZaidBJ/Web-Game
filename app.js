var express = require("express");
var app= express();
var mongoose= require("mongoose");
var jwt =require("jsonwebtoken");
var bcrypt=require("bcrypt-nodejs");
var BodyParser= require("body-parser");
var socket=require("socket.io");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/data");
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
var entry=[]

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

var cook_array=[];

///////////////////////////////////////////////////
function check_cookies(req,res)
{

cook_array=req.headers.cookie.split(";")

  for(var i=0;i<req.headers.cookie.length;i++)
  {if(req.headers.cookie[i]==";")
text="";
  else {

    if(text==" m=")
    text="";

text+=req.headers.cookie[i];
    }
  }

  console.log("looooooooooooooooooooooooooooooooooooooooooogggggggggggggggggggghhh")
  console.log(cook_array)
  if(cook_array.length>2){
console.log(cook_array[2].split("="))
    for(var i=0;i<cook_array.length;i++)
{
 if(cook_array[i].split("=")[0]===" m")
 {
   text=cook_array[i].split("=")[1];
   break;
 }
 else {
   text=""
 }
}

}

console.log("text = "+text);

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



function SinglePlayer_check_cookies(req,res)
{
cook_array=req.headers.cookie.split(";")
if(req.headers.cookie)
  for(var i=0;i<req.headers.cookie.length;i++)
  {if(req.headers.cookie[i]==";")
text="";
  else {

    if(text==" m=")
    text="";

text+=req.headers.cookie[i];
    }
  }



  console.log(cook_array)
  if(cook_array.length>2){
console.log(cook_array[2].split("="))
    for(var i=0;i<cook_array.length;i++)
{
 if(cook_array[i].split("=")[0]===" m")
 {
   text=cook_array[i].split("=")[1];
   break;
 }
 else {
   text=""
 }
}

}
console.log("text = "+text);
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
    res.render("single.ejs",{name:user.name});
      });

  }
  });
else {
  res.send("invalid attempt");
}

});

}











function multiPlayer_check_cookies(req,res)
{
cook_array=req.headers.cookie.split(";")

  for(var i=0;i<req.headers.cookie.length;i++)
  {if(req.headers.cookie[i]==";")
text="";
  else {

    if(text==" m=")
    text="";

text+=req.headers.cookie[i];
    }
  }


console.log("mullttttttttttttttttttttttttti")
  console.log(cook_array[2].split("="))
  if(cook_array.length>2){
console.log(cook_array[2].split("=")[0])
    for(var i=0;i<cook_array.length;i++)
{
 if(cook_array[i].split("=")[0]===" m")
 {console.log("matched")
   text=cook_array[i].split("=")[1];
   break;
 }
 else {
   text=""
 }
}

}
console.log("text = "+ text)



///////in case someone copies jwt ////////////////////////////////////
/////////////////jwt blacklist////////////////////////////////////////////
// BlackList.find({token:text},function(err,checking){
// if(checking.length<1)
  jwt.verify(text,"aaaa",function(err,decoded){

    if(err)
  res.sendFile(__dirname + "/k.html");
    else{
      User.findOne({_id:decoded.userid},function(err,user){
  if(user)
    res.render("multi.ejs",{name:user.name});
      });
  }  });
//
//   }
//   });
// else {
//   res.send("invalid attempt");
// }
//
// });

}










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
    res.render("home.ejs",{name:req.body.name});
  });
});

});


/////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/SignUp",function(req,res){
  //if(req.headers.cookie)
//check_cookies(req,res);
//else {
  res.sendFile(__dirname+"/Signup.html")
//}

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

var server=app.listen(3006,function(){
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
  //res.render( "single.ejs");
  console.log("single");
  console.log(req.headers)
  SinglePlayer_check_cookies(req,res);
});

app.get("/multiPlayer",function(req,res){
 //  if(entry.length==0){
 //    entry.push("entry")
 //     res.cookie('data', JSON.stringify({player:1}));
 //  res.render("multi.ejs");
 //  }
 //  else {
 //    res.cookie('data', JSON.stringify({player:0}));
 // res.render("multi.ejs");
 //  }
 multiPlayer_check_cookies(req,res);
//res.render("multi.ejs");
});


var io=socket(server);
io.set('origins', '*:*');
io.on("connection",function(socket){


  console.log("socket connected")
  console.log(entry)
  socket.on("hey",function(data){
    console.log("msg")
  })

  socket.on("disconnect",function(err,socket){

    console.log("disconnect");

      console.log("nikal;")
  });

  socket.on("go",function(data){
    console.log(data)
      socket.broadcast.emit('char', data);
  });

  socket.on("villain_go",function(data){
    socket.broadcast.emit("player2",data);
  });
});
