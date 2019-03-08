function del_cookie(name) {
   document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}

var tok=false;


function decide(cook){
  var text="";

    for(var i=0;i<cook.length;i++)
    {if(cook[i]==";")
    text="";
    else {

      if(text==" m="){
      text="";
      tok=true;
          break;

  }




    text+=cook[i];

      }
    }


}




function get_cookie(cook){
var text="";

  for(var i=0;i<cook.length;i++)
  {if(cook[i]==";")
  text="";
  else {

    if(text==" m="){
    text="";

}

  text+=cook[i];
    }
  }

  return text;
}



window.onload=function(){
  var k = document.getElementById("left");
  var p = document.getElementById("right");
k.classList.add("moveLeft");

p.classList.add("moveRight");
}
setTimeout(function ko(){
  var k = document.getElementById("left");
  var p = document.getElementById("right");

  k.classList.add("wipe")
p.classList.add("wipe")},3000);

var logout=document.getElementById("logout");
logout.addEventListener("click",function(){
  var cook=document.cookie;
  decide(cook);
  var cookie=get_cookie(cook);
  console.log(cookie);



del_cookie('m');
del_cookie('player')

});



var link=document.getElementById("player_name").innerHTML;
 document.cookie = "player=" +link ;
