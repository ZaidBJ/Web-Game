
var x=document.cookie.split(";")[3].split("=")[1];
var gamer;
console.log(document.cookie.split(";"))
if(x=="zaid")
{
  gamer=1;
}
else {
  gamer=0;
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


function del_cookie(name) {
   document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}




var ctx=document.getElementById("canvas").getContext("2d");
var bg=document.getElementById("bg");
var char=document.getElementById("stand");
var villain_stand=document.getElementById("villain_stand");
var villain_stand1=document.getElementById("villain_stand1");
var villain_kick=document.getElementById("villain_kick");
var villain_air=document.getElementById("villain_air");
var villain_injured=document.getElementById("villain_injured");
var villain_punch=document.getElementById("villain_punch");
var villain_powerBeam=0;
var stopping_time=0;
var left_pressed=0;
var up_pressed=0;
var villain_left_pressed=0;
var villain_right_pressed=0;
var right_pressed=0;
var char_move_right=false;
var villain_noMovement=false;
var villain_kameha_hit=0;
var audio_played=0;
var villain_energy_amount=100;
var to_move=0;
var num_a=100;
var num_b=100;
var char_no_movement=false;
var villain_left_diagonal=false;
var villain_right_diagonal=false;
var villain_lock=false;
var power_charge=false;
var villain_hurt=false;
var villain_rhead=document.getElementById("villain_rhead");
var explosion=document.getElementById("explosion");
var villain_kameha=document.getElementById("villain_kameha");
var villain_fall=document.getElementById("villain_fall");
var villain_air=document.getElementById("villain_air");
var villain_standUp=document.getElementById("villain_standUp");
var villain_jump=document.getElementById("villain_jump");
var villain_energy_ball=document.getElementById("villain_energy_ball");
var villain_power_Ready=document.getElementById("villain_powerReady");
var villain_powerGo=document.getElementById("villain_powerGo");
var villain_energyBeam= document.getElementById("villain_energyBeam");
var villain_up= document.getElementById("villain_up");
var villain_upa= document.getElementById("villain_upa");
var villain_upb= document.getElementById("villain_upb");
var villain_defence=document.getElementById("villain_defence");
var char_attack=document.getElementById("char_attack");
var char_kick=document.getElementById("char_kick");
var char_jump=document.getElementById("char_jump");
var char_head=document.getElementById("head");
var char_kameha=document.getElementById("kameha");
var laser=document.getElementById("laser");
var char_powerReady=document.getElementById("power_ready");
var char_1=document.getElementById("stand_1");
var char_hurt=document.getElementById("char_hurt");
var hero_standUp=document.getElementById("hero_standUp");
var char_ball=document.getElementById("power_ball");
var char_attackGo=document.getElementById("attack_go");
var hero_fall=document.getElementById("hero_fall");
var char_defence=document.getElementById("char_defence");
var ball_cords=[];
var damage_count=0;
var ball=[];
var ball_height=[];
var villain_ball_height=[];
var villain_ball=[];
var villain_ball_cords=[];
var bg_1=document.getElementById("bg_right");
var bg_2=document.getElementById("bg_right_end");
var bg_3=document.getElementById("bg_end");
var ground=550;
var bg_shift=0;
var wait =0;
var hero_wait=0;
var hero_kameha_count=0;
var defend=false;
var track=20;
var jump_twice=0;
var no_movement=false;
var right_cord=360;
var attack=false;
var number_a;
var string_a;
var number_b;
var string_b;
var no_defence=false;
var defence_hero= false;
var kick =false;
var head=false;
var hero_hurt=false;                        //////////////////villain_energy_amount for villain health
var vapsi=false;
var char_jump_check=false                   //////////////////////////////////number for hero health
var char_injured=false;
var kameha=false;
var powerful=false;
var villain_jump_check=0;
var villain_onFloor =0;
var villain_laidDown=0;
var shift_bg_right_1=false;
var explosion_location=[];
var backout=false;
var shift_bg_right_2=false;
var villain_ground= 200;
var villain_cord =360;
var villain_movefrwd=false;
var count_villain=0;
var villain_check=true;
var direction=false;
var active_HeroFall = false;
var check_char_attack=0;
var check_villain_attack = false;
var number=100;                                  ///////////////////////number for hero heath bar
var string;
var i=1;
var j=1;
var villain_wait=0;///////////////////////////=-----------------------------------------------
/////////////////////////////////////////////////////////////
var hero_damage_measure=0;
var villain_damage_measure=0;
var hero_specialCount=0;
var villain_specialCount=0;
var hero_bar =document.getElementById("hero1");
var villain_bar = document.getElementById("villain1");
var hero_powerBar =document.getElementById("hero_limit");            ////////////name opposite to what u think
var villain_powerBar =document.getElementById("villain_limit");
var result =document.getElementById("result");
var x = document.getElementById("myAudio");
var char_move_not=document.getElementById("char_move_not");
var enemy_move;
///////////////////////////////////////////////////////////////////////////////

var socket=io.connect("127.0.0.1:3006");
socket.emit("hey","gfdgfdfdg");
// var cookiearray;
// cookiearray = document.cookie.split(';');
//
// var player_no=cookiearray[2].split("=")[1];
//
// var uri_dec = decodeURIComponent(player_no);
//
// console.log("arrray")
// var gamer= JSON.parse(uri_dec).player;
// console.log("gamer is" +gamer)


var lock=false

var restart=document.getElementById("restart");

restart.addEventListener("click",function(){
  document.location.href="";
});


function gravity(){
  if(right_cord<360)
  lock=true;
  else {
    lock=false;
  }
  if(villain_cord<360)
  villain_lock=true;
  else {
    villain_lock=false;
  }
if((right_cord+160*i)<360)
{right_cord+=160*i;
  i+=2;
}
else {
  right_cord+=(360-right_cord);
  i=1;
}
if(villain_cord+160*j<360){
villain_cord+=160*j;
j+=2;
}
else {
  villain_cord+=(360-villain_cord);
  j=0;

}
}




  function playAudio() {
    x.play();
  }



/////////////////////////////////////////////////////////////////
window.onload=function() {
  ctx.drawImage(bg,0,0,1000,650);
  ctx.drawImage(char,ground,right_cord,190,300);




}
var count=0;


var interval  = setInterval(function(){
 /////////////////////////////////////////////////////////////////////////////////villain injured///////////////////////////////////////////
power_charge=false;












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(hero_hurt)
{ hero_damage_measure+=1
number -=2;
if(number<0)
number=0;
var numz=number.toString();
  if(number==0){
  clearInterval(interval);
result.innerHTML="YOU LOST";
result.classList.add("res");
}
  if(number<30)
  hero_bar.classList.add("bg-danger");
 string = numz + "%";
 hero_bar.style.width=string;
  damage_count+=1;
  if(damage_count==7)
{  hero_wait=10;
  hero_hurt=false;
}
}
else {
  damage_count=0;
}




if(check_char_attack > 0 )
{
  if(!power_charge)

villain_ground-=0;

}
//////////////////////for smooth jumping of hero character//////
  if(jump_twice==2){
right_cord-=220;
jump_twice+=1;
}
  if(jump_twice==1){
  jump_twice+=1;
}
if(jump_twice>2)
jump_twice=0;

/////////////////////////////////////////////////


  ctx.clearRect(0,0,800,660);
  ////////////////////////////////////////////////
  if(bg_shift==0)
  ctx.drawImage(bg,0,0,1000,650);
  else {

    if(bg_shift<=20)
      ctx.drawImage(bg_1,0,0,1000,650);
      else {
        if(bg_shift<=40)
        ctx.drawImage(bg_2,0,0,1000,650);
        else {
          if(bg_shift>40)
          ctx.drawImage(bg_3,0,0,1000,650);
        }

      }

  }

  ////////////////bg change//////////////////////////

  if(explosion_location.length>0)
  for(var k=0;k<explosion_location.length;k++)                        /////////////////////////power balls of opponents  to explode when mested
  {
    ctx.drawImage(explosion,explosion_location[k],right_cord+50,60,60);
    explosion_location[k]+=1000;
  }




////////////////////////character fallen by deat hattack of villain


  ////////////////character defence/////////////////////
if(hero_hurt){
  if(hero_wait>0){
    if(hero_wait>0&& hero_wait<6)
    ground+=15;
    else
    ground=ground+25;
  ctx.drawImage(char_hurt,ground,right_cord,190,300);
  hero_wait=0;

char_injured=false;
if(hero_wait>6)
char_no_movement=true;


  }

    else
  ctx.drawImage(char_hurt,ground,right_cord,190,300);
  hero_hurt=false;
  if(hero_wait>1 && hero_wait<5)
  no_movement=true;
  if(hero_wait ==1)
  no_movement=false;
  if(hero_wait>0)
  char_injured=false;

}
else{
  if(char_injured||hero_wait >0){

if(hero_wait==10 || hero_wait==9){
  ctx.drawImage(hero_fall,ground+90,right_cord+190,230,160);
  no_movement=true;
}
  else
  if(hero_wait==7 || hero_wait==8){
  ctx.drawImage(hero_fall,ground+140,right_cord+160,230,160);
no_movement=true;}
  else
  if(hero_wait >4 &&hero_wait<7)
  if(ground+100 <850){
    ctx.drawImage(hero_fall,ground+120,right_cord+190,230,160);
  no_movement=true;}
    else {
        ctx.drawImage(hero_fall,ground+10,right_cord+190,230,160);
        no_movement=true;
    }
else
{  ctx.drawImage(hero_standUp,ground+80,right_cord+120,170,180);
no_movement=true;  ///////////////no user movement after geavy attack till  character wakes up completely
}
if(hero_wait==1){
char_injured=false;
no_movement=true;
setTimeout(function(){no_movement=false},170);
}
  }
  else{
  if(defence_hero)
  {
    ctx.drawImage(char_defence,ground,right_cord,225,290);
      defence_hero=false;
  }
  else
  {



  if(char_jump_check)
   {
////////////////for left right movement in jump/////

if(right_cord<350)
if(direction && ground > 10){
ground-=125;
direction=false;
}
else  if(char_move_right&&ground<840) {
  ground+=125;
  char_move_right=false;

}

  ctx.drawImage(char_jump,ground,right_cord,240,320);
  if(right_cord>350)
  char_jump_check=false
}
else{

  if(char_no_movement){                                          ////////////////for hurt image when no_movement is on(true)
    ctx.drawImage(char_move_not,ground,right_cord+30,220,280);


    to_move+=1;
    if(to_move==8){
    no_movement=false;
    to_move=0;
    char_no_movement=false;
  }
  }
  else
  if(!powerful){
  if(!kameha){
  if(!head){
  if(!kick){
      if(!attack){
  if(count%2==0)
   {//if(right_cord<350)
  // if(direction)
  // ground-=25;
  // else {
  //   if(char_move_right)
  //   ground+=25;
  // }
    ctx.drawImage(char_1,ground,right_cord,190,300);}
    else {if(right_cord<350)
      if(direction)
      ground-=25;           ///////////////jump assist with left and right arrow//////////
      else {
        ground+=25;
      }
        ctx.drawImage(char,ground,right_cord,190,300);
    }
  }
  ///////////////////punch///////////////////
  else {
      ctx.drawImage(char_attack,ground,right_cord,255,300);
      attack=false;
      if(Math.abs(ground-villain_ground)<150)
    villain_hurt=true;
  }
//kick ///
}
else {
    ctx.drawImage(char_kick,ground-55,right_cord+20,258,280);
    kick=false;
        if(Math.abs(ground-villain_ground)<150)
    villain_hurt=true;
}
}
else {
  ///////////////head////////////////////
  ctx.drawImage(char_head,ground-160,right_cord,195,240);
  head=false;
  if(Math.abs(ground-villain_ground)<200)
  villain_hurt=true;
  if(villain_kick_attack|| villain_punch_attack)
  active_HeroFall=true;

  if((ground-villain_ground) < 150 && ground-villain_ground >0)
  ground-=ground-villain_ground+100;
  else {
    ground-=100;
  }
}
}
////////////////////power ball///////////////////////////
else {
    ctx.drawImage(char_kameha,ground,right_cord,220,280);

  ball.push("ball");
  ball_height.push(right_cord);
  ball_cords.push(ground-50);
kameha=false;
}


//////////////////////////power ball end/////////////////////////////////////

}

///////////////////////power_ready///////////////////////////////////
else {

if(num_a<0)
num_a=0;
if(num_a==0)
{
wait=0;
powerful=false;
  ctx.drawImage(char,ground,right_cord,190,300);

}

else{



  if(wait<7)
  {  ctx.drawImage(char_powerReady,ground,right_cord,205,290);
  wait++;


}
else {
  num_a-=33.33;
  if(num_a<0)
  num_a=0;
  number_a = (num_a).toString();              /////////////////////power limit reached
 string_a = number_a + "%";





 villain_powerBar.style.width=string_a;

ctx.drawImage(char_attackGo,ground,right_cord,255,340);
ctx.drawImage(laser,ground-600,right_cord+60,600,40);
wait=0;
powerful=false;

    //////////villain may dodge hero most powerful att

////////////////----   change   if(Math.random()>0.9 jump_show=true;

if(((villain_cord - right_cord) ==0) && !(villain_onFloor >0)){

  villain_powerBeam=1;
  villain_energy_amount-=24;
  if(villain_energy_amount <0)
  villain_energy_amount=0;
  villain_number= villain_energy_amount.toString();

  if(villain_energy_amount<30)
  villain_bar.classList.add("bg-danger");
  var villain_string = villain_number + "%";
 villain_bar.style.width=villain_string;
 if(villain_energy_amount==0){
 clearInterval(interval);
result.innerHTML="YOU WIN";
result.classList.add("res_hero");
}
}
}

}

}

}
}
}
}

////jump end
////////////powerReady end//////////////////////////////
//////////////////////////////////////////////////

for(var i=0;i<ball.length;i++)
{
  if(ball_cords[i]>2)
  {
    ctx.drawImage(char_ball,ball_cords[i],ball_height[i]+30,60,60);
    ball_cords[i]-=90;
  }
}
/////////////////////power ball here/////////////////////////////////////


/////////////////////////////////////////////////
    count++;


if(villain_powerBeam==2){
villain_laidDown=10;
villain_powerBeam=0;
}
///////////////////////////Villain Starts here////////////////////////////










if(ball_cords.length>0)
{
  for(var i=0;i<ball_cords.length;i++){


    if(ball_cords[i]>0)
{
if(Math.abs(ball_cords[i]-villain_ground )<70 && (ball_cords[i]-villain_ground )>-30 && ball_height[i]==villain_cord )
{


villain_hurt =true;
console.log("hit");
villain_energy_amount-=4;
if(villain_energy_amount<0)
villain_energy_amount=0;

  villain_number = (villain_energy_amount).toString();              /////////////////////villain_can't dodge kameha after fall
 villain_string = villain_number + "%";

villain_bar.style.width=villain_string;
if(villain_energy_amount==0){
clearInterval(interval);
result.innerHTML="YOU WIN";
result.classList.add("res_hero");
}

ball_cords[i]-=1000;

  break;

}

}

  }

}















if(villain_noMovement){
  if(stopping_time==5)
  { stopping_time=0;
    villain_noMovement=false;
  }
  else {
    stopping_time+=1;
     ctx.drawImage(villain_injured,villain_ground-30,villain_cord+35,190,300);
  }
}else{





  if(villain_left_diagonal && villain_ground > 10){
  villain_ground-=125;
  villain_left_diagonal=false;
  }
  else  if(villain_right_diagonal&&villain_ground<840) {
  villain_ground+=125;
    villain_right_diagonal=false;

  }











if(villain_laidDown>0){

}
else{
if(villain_hurt)
{ villain_ground-=25;

   ctx.drawImage(villain_injured,villain_ground,villain_cord+35,190,300);
   villain_hurt=false;
    villain_wait=0;








   villain_energy_amount-=2;
    var villain_number = (villain_energy_amount).toString();
       if(villain_number<0)
    villain_number=0;
    if(villain_energy_amount==0){
    clearInterval(interval);
    result.innerHTML="YOU WIN";
    result.classList.add("res_hero");

  }
    if(villain_energy_amount<30)
    villain_bar.classList.add("bg-danger");
    var villain_string = villain_number + "%";
   villain_bar.style.width=villain_string;









}
else{


if(villain_forward){
  villain_ground+=0;

villain_forward=false;
}
if(villain_back) {
  villain_ground-=0;

  villain_back=false;
}




if(jump_show)
{
  ctx.drawImage(villain_jump,villain_ground-90,villain_cord,250,220);
  villain_jump_check+=1;
jump_show=false;

}
else{
if(villain_head_attack)
{ console.log("head_attack")
 villain_head_attack=false;

  if(1==1){
        if(Math.abs(ground-villain_ground)<200){
     hero_hurt=true;
       number -=5;
     if(number<0)
     number=0;
    var numk=number.toString();
      if(number==0){
      clearInterval(interval);
    result.innerHTML="YOU LOST";
    result.classList.add("res");
    }
      if(number<30)
      hero_bar.classList.add("bg-danger");
      var string_o = numk + "%";
     hero_bar.style.width=string_o;
     if(kick || attack){
       villain_laidDown=10;

   }
   }
     // else {
     //
     //   hero_hurt=true;
     // }
   }
    ctx.drawImage(villain_rhead,villain_ground,villain_cord+100,270,150);







}
else {
     if(villain_kick_attack){
     villain_kick_attack=false;
  ctx.drawImage(villain_kick,villain_ground-track,villain_cord,370,300);
  if(Math.abs((ground-villain_ground))<150 && !defence_hero  && (right_cord-villain_cord)==0){
    if(ground<850)
  ground+=40;
hero_hurt=true;}
else {
  if(ground-villain_ground <50 & defence_hero)
  ground+=20;
}


}
else{
  if(villain_punch_attack){
    console.log("punch")
    villain_punch_attack=false;
  ctx.drawImage(villain_punch,villain_ground-80,villain_cord,300,300);
   if(!defence_hero)  {

  if(Math.abs(ground-villain_ground)<150)
  {ground+=40;
hero_hurt=true;}
}
  else
    if(Math.abs(ground-villain_ground)<150)
  ground+=20;

powerful=false;
}
else
  {
if(villain_kameha_attack){
ctx.drawImage(villain_kameha,villain_ground,villain_cord,240,310);
    villain_ball.push("ball");
    villain_ball_height.push(villain_cord);
    villain_ball_cords.push(villain_ground+50);
   villain_kameha_attack=false;}
   else{

        if(  villain_specialAttack|| villain_wait>0 && allow_deathAttack  ){
     villain_specialAttack=false;
                                           ///////////////////villlain major injury
         if(num_b<0)
         num_b=0;
         if(num_b==0)
         {
         villain_specialAttack=false;
         villain_wait=0;
           ctx.drawImage(villain_stand,villain_ground,villain_cord,190,300);
           allow_deathAttack=false;
         }
         else {


         if(villain_wait<7)
       {  ctx.drawImage(villain_powerReady,villain_ground-20,villain_cord+40,270,260);
           villain_wait+=1;}
         else {
       if(right_cord-villain_cord==0){
       number-=25;
       if(number<0)
       number==0;
        number_b = (number).toString();
        string_b = number_b + "%";
       hero_bar.style.width=string_b;
           ctx.drawImage(villain_powerGo,villain_ground,villain_cord+20,260,260);
           ctx.drawImage(villain_energyBeam,villain_ground+270,villain_cord+100,700,30); ///////////////////for attack on hero
           villain_wait=0;

          villain_specialAttack=false;


           num_b-=5;
           if(num_b<0)
           num_b==0;
            number_b = (num_b).toString();    //////////////////////to lower villain energy power use
            string_b = number_b + "%";
           hero_powerBar.style.width=string_b;


           if(right_cord - villain_cord == 0)
           {char_injured =true;
       hero_wait=10;
       powerful=false;
           }
         }
       }
       }
         ///////////////////////app.js
         //////////////

       }
     else {
  if(count%2==0)
    ctx.drawImage(villain_stand,villain_ground-100,villain_cord,190,300);
  else
    ctx.drawImage(villain_stand1,villain_ground-100,villain_cord,190,300);
}



}  ////kameha bracket
} ///punch bracket
} //kick bracket
} //// villain head bracket
}   ////////////jump bracket closure





}   //// villain hurt
} ///////// villain laid down
} /// villaib no_movement bracket






//////////////////////////////////////////villain ball hit check


for(var i=0;i<villain_ball.length;i++)
{
  if(villain_ball_cords[i]<980)
  {
    ctx.drawImage(villain_energy_ball,villain_ball_cords[i]+180,villain_ball_height[i]+60,50,50);
  villain_ball_cords[i]+=90;
  if(Math.abs(ground-(villain_ball_cords[i]+70))<50 && (villain_ball_height[i]-right_cord)==0 && !defence_hero)
{  hero_hurt=true;
  powerful=false;
  villain_ball_cords[i]+=1000;

}
}}












if(num_b==0)
{

}


if(power_charge)
{  if(num_b==0)
  {
    villain_energy_amount-=5;
  }
  if(villain_onFloor==3){
    console.log("no 3")
    ctx.drawImage(villain_up,villain_ground,villain_cord,210,290);              ////////////////villain self defence energy
    villain_onFloor+=1;
}
else
if(villain_onFloor==4){
  console.log("no 4")
ctx.drawImage(villain_upa,villain_ground,villain_cord,210,290);
villain_onFloor+=1;
}
else
if(villain_onFloor==5){
  console.log("no 5")
  ctx.drawImage(villain_upa,villain_ground,villain_cord,210,290);
  villain_onFloor+=1;

}
else
if(villain_onFloor==6){
console.log("no 6")
ctx.drawImage(villain_upb,villain_ground,villain_cord,210,290);

power_charge=false;
villain_onFloor=0;
if(ground-villain_ground <300){
hero_hurt=true;

number-=10;
}

                    //////////////////hero health decreased



    num_b-=5;
     number_b = (num_b).toString();    //////////////////////to lower villain energy power use
     string_b = number_b + "%";
    hero_powerBar.style.width=string_b;

}
}else {


///////////////////////////////////////////////////villain injured through character attack//////////////////////
if(villain_laidDown>0)
{ if(villain_laidDown>8&& villain_laidDown <=9)
  ctx.drawImage(villain_air,villain_ground-110,villain_cord +120,240,210);
  if(villain_laidDown>3 && villain_laidDown <9)
 {ctx.drawImage(villain_fall,villain_ground-170,villain_cord +180,290,150);
    }
if(villain_laidDown>0&& villain_laidDown<=3)
{ console.log("laid down")
ctx.drawImage(villain_standUp,villain_ground-170,villain_cord+120,230,170);

}
if(villain_laidDown==1)
{
  ctx.drawImage(villain_standUp,villain_ground-170,villain_cord+120,230,170);
villain_ground-=70;
}
}
else{
if((!defence_vil|| no_defence) && check_char_attack>0)
{
  if(Math.random()>0.3 && villain_onFloor ==3 && !power_charge&&num_b==0)
  {                                                                                   ///////////////to increase villain self defemce when energy limit is reached
  power_charge=false;
  }

  if(Math.random()>0.5 && villain_onFloor ==3 && !power_charge&&num_b>0)
  {
  power_charge=false
  }
  else{
  if(villain_onFloor==6 && !villain_noMovement){

  villain_onFloor=0;
    villain_noMovement=true;
      villain_kameha_hit=1;
}
//  else
//  {  ctx.drawImage(villain_injured,villain_ground,villain_cord+35,190,300);
// console.log("punch")
// DeathAttack=false;
// villain_wait=0;
//
//
// }
}
  no__defence=true;   ////////////////so that villain contiues getting beated///////////////////
}
else{

  villain_onFloor=0;
if(check_char_attack > 0 && defence_vil){
  ctx.drawImage(villain_defence,villain_ground,villain_cord,190,300);
}
////////////////////villain power attack//////////////////
else{
if(DeathAttack || villain_wait>0 && allow_deathAttack  ){

//   if(num_b<0)
//   num_b=0;
//   if(num_b==0)
//   {
//   DeathAttack=false;
//   villain_wait=0;
//     ctx.drawImage(villain_stand,villain_ground,villain_cord,190,300);
//     allow_deathAttack=false;
//   }
//   else {
//
//
//   if(villain_wait<7)
// {  ctx.drawImage(villain_powerReady,villain_ground-20,villain_cord+40,270,260);
//     villain_wait+=1;}
//   else {
// if(right_cord-villain_cord==0){
// number-=25;
// if(number<0)
// number==0;
//  number_b = (number).toString();
//  string_b = number_b + "%";
// hero_bar.style.width=string_b;
//     ctx.drawImage(villain_powerGo,villain_ground,villain_cord+20,260,260);
//     ctx.drawImage(villain_energyBeam,villain_ground+270,villain_cord+100,700,30); ///////////////////for attack on hero
//     villain_wait=0;
//
//
//
// //
//     num_b-=5;
//     if(num_b<0)
//     num_b==0;
//      number_b = (num_b).toString();    //////////////////////to lower villain energy power use
//      string_b = number_b + "%";
//     hero_powerBar.style.width=string_b;
//
//
//     if(right_cord - villain_cord == 0)
//     {char_injured =true;
// hero_wait=10;
// powerful=false;
//     }
//   }
// }
// }
  /////////////////////////////////////

}
/////////////////////////////////////villain jump////////////////////////
else{
if((jump_show || villain_jump_check==1) && villain_ground < (ground-60) ||defend && villain_ground > 100 ||defend && villain_jump_check<2)///////////////////////////////////////////////
{
  ///
}
////////////////////////////////////////villain jump end//////////////////////////////////
else{
if(villain_jump_check==2)
villain_jump_check+=1;
else {
  villain_jump_check=0;

}
/////////////////////////////villain_kameha////////////////////////////////
if(kameha_show&&ground-villain_ground>380&& ground-villain_ground <500)
{
  num_b-=5;
   number_b = (num_b).toString();    //////////////////////to lower villain energy power use
   string_b = number_b + "%";
  hero_powerBar.style.width=string_b;
if(num_b<0)
{
    ctx.drawImage(villain_stand,villain_ground,villain_cord,190,300);
}
else{

    ctx.drawImage(villain_kameha,villain_ground,villain_cord,240,310);
        villain_ball.push("ball");
        villain_ball_height.push(villain_cord);
        villain_ball_cords.push(villain_ground+50);
      }
}//////////////////////////////////villain_kameha ends/////////////////////////////////
else{
  //////////////////////////villain_head/////////////////////////////
if( ground-villain_ground>280 && ground-villain_ground<300)
 {// if(ground-villain_ground>160){
//
//    hero_hurt=true;
//
//    number -=15;
//    if(number<0)
//    number=0;
//   var numk=number.toString();
//     if(number==0){
//     clearInterval(interval);
//   result.innerHTML="YOU LOST";
//   result.classList.add("res");
//   }
//     if(number<30)
//     hero_bar.classList.add("bg-danger");
//     var string_o = numk + "%";
//    hero_bar.style.width=string_o;
//  }
//    else {
//
//      hero_hurt=true;
//    }
//   ctx.drawImage(villain_rhead,villain_ground,villain_cord+100,270,150);
///////////////////////////villain_head_ends//////////////////////////
}

else {


if((ground-villain_ground)>110 && (!backout || vapis)){
  if(villain_ground>150)
  vapis=false;


}
///////////////////////////////////////villain left movement////////////////////////////
else {
  if(backout){
    if(villain_ground-50<0){
    vapis=true;

  }else {
    if(villain_movefrwd&&(ground-villain_ground)>60)
    villain_ground+=0;

  }



    if(count_villain%2==0)
    {
      ctx.drawImage(villain_stand,villain_ground,villain_cord,190,300);
    }
    else {
      ctx.drawImage(villain_stand1,villain_ground-33,villain_cord,190,300);
    }
  }
///////////////////////////////////////////////////////////////////////





///////////////////////////////////variety of attacks/////////////////////////////////////////////////////


  if(check_moves){


if(villain_kick_attack){

}
  powerful=false;       ////////////////////so that her power_beam attack gets dead else he will attack even after getting ready for beam was interrupted
  }///////////////////////////////backout to decide whether to attack after single hit
    else {

}
   ///////////////to decide if villain goes back after one punch or kick






















////ground+=100;/////////////////////////////////////////////////////////////////////////////////////////////////

}
}
}

}

}

}
}
}
}
count_villain++;

//////////////////////////////villain kameha meha ball rendering//////////////////////////

///////////////////////villain_kameha  ball rendering ends here////////////////////////////

gravity();



////////////////continue villain beating/////////////////
// if(no_defence && check_char_attack==1 && !jump_show)
// no_defence=false;

if(villain_laidDown>0)
villain_laidDown--;

if(check_char_attack>0)
check_char_attack-=1;

if(villain_powerBeam==1)
villain_powerBeam=2;

if(hero_wait>0)
hero_wait-=1;


if(active_HeroFall)
{
  hero_wait=10;
  active_HeroFall=false;
}



for(var i=0;i<villain_ball.length;i++)
{ for(var j=0;j<ball.length;j++)
{
  if(Math.abs(ball_cords[j]-villain_ball_cords[i])-40 < 100){
console.log("collide")                                                 ////////////////////////////for balls to explode when meet
    explosion_location.push(villain_ball_cords[i]);
ball_cords[j]-=1000;
villain_ball_cords[i]+=1000;


}
}
}

},150);


var check_extraPress=0;
document.addEventListener("keydown",function(e){
  if(gamer==1){
if(audio_played==0){
    playAudio();
    audio_played=1;
    setTimeout(function(){audio_played=1},120000);
  }
    if(!no_movement){ ////////////////////no movement when user attacked by villlain Death Attack
  if(check_extraPress-count<10){
  if(e.keyCode==37)
  {socket.emit("go","left");

left_pressed+=1;


  if(right_cord==360)
    if(ground>50)
  ground-=35;

  socket.emit("go",{char_ground:ground});

}
if(e.keyCode==39)

{
  right_pressed+=1;
  socket.emit("go","right");

  if(ground<780){

  if(right_cord<360){ // ground+=125;

  }
  else
  if(right_cord==360)
  ground+=35;
bg_shift=0;
}
else {
bg_shift+=10;


}


 socket.emit("go",{char_ground:ground});
}
if(e.keyCode==65)
{
socket.emit("go","punch");

  if(Math.abs(ground-villain_ground)<180 && ground > villain_ground)
  if(!power_charge)
  check_char_attack+=1;
attack=true;
}
if(e.keyCode==83)
{ socket.emit("go","kick");
  if(Math.abs(ground-villain_ground)<180 && ground >villain_ground)
  if(!power_charge)
  check_char_attack+=1;
kick=true;

}

if(e.keyCode==38 && !lock ){



    if(left_pressed>0)
    {   up_pressed=0;
      socket.emit("go","diagonal_left")
      if(1==1){
        direction=true;
        console.log("direction")
      }

      // if(ground > 50)
      //   ground-=125;
    }

    if(right_pressed>0 )
    {  console.log('jump right')
         console.log(right_cord);
       up_pressed=0;
      char_move_right=true;
      socket.emit("go","diagonal_right");
    console.log("diagonal_right");
    }



socket.emit("go","jump");
  ////check character is in canvas///////////////
  if(right_cord>170&&jump_twice<2)
right_cord-=180;
char_jump_check=true;
jump_twice+=1;
}
if(e.keyCode==72)
{ socket.emit("go","head");
  if(Math.abs(ground-villain_ground)<200)
  check_char_attack+=1;
head =true;

}
if(e.keyCode==90)
{ console.log("ball sended")
 socket.emit("go","power_ball");
  num_a-=6;
  number_a = (num_a).toString();              /////////////////////power limit reached
  string_a = number_a + "%";


if(num_a<0)
num_a=0;

villain_powerBar.style.width=string_a;
if(num_a>0)
kameha=true;
else {
    ctx.drawImage(char,ground,right_cord,190,300);
}
}
if(e.keyCode==88){
socket.emit("go","special");                                                       //////////////////////////////////////////////////////////////yaha oe bracket lagaya ha
powerful=true;}
check_extraPress++;

if(e.keyCode==68){
socket.emit("go","defence");
defence_hero=true


}




}
}
}}
);








document.addEventListener("keyup",function(e){

  if(e.keyCode==37)
  {
  left_pressed=0;
  }
  if(e.keyCode==38)
  {
  //  up_pressed+=1;
  }
  if(e.keyCode==39)
  {
    right_pressed=0;
  }









});






















////////////////////////for villain_




















var defence_vil=false;

var  DeathAttack = false;
 var kameha_show =  false;;
  var villain_head_attack =  false;
   var  jump_show = false;
var check_moves=false;
var villain_punch_attack=false;

var villain_forward=false;
var villain_back=false;
var villain_kameha_attack=false
var villain_specialAttack=false;
var villain_kick_attack=false;




if(gamer==0){

document.addEventListener("keydown",function(e){

if(e.keyCode==100)
{console.log("back")
if(villain_cord==360){
 villain_ground-=35;
 villain_left_pressed+=1;
 console.log("villain back")
socket.emit("villain_go",{villain:villain_ground});
}
}
if(e.keyCode==102)
{if(villain_cord==360){
 villain_ground+=35;
 villain_right_pressed+=1;
 console.log("villain forward")

socket.emit("villain_go",{villain:villain_ground});}
}
if(e.keyCode==104 && !villain_lock)
{jump_show=true;

villain_cord-=120;

if(villain_left_pressed>0)
{
  socket.emit("villain_go","villain_left_diagonal")
console.log("villain diagonal left")
  villain_left_diagonal=true;


  // if(ground > 50)
  //   ground-=125;
}

if(villain_right_pressed>0 )
{
console.log("villain diagonal_right")
  villain_right_diagonal=true;
  socket.emit("villain_go","villain_right_diagonal");

}







socket.emit("villain_go","jump");
}
if(e.keyCode==78)
{

villain_head_attack =  true;
socket.emit("villain_go","head");
}
if(e.keyCode==74)
{
 villain_punch_attack=true;
 socket.emit("villain_go","punch");

}
if(e.keyCode==77)
{
 villain_kick_attack=true;
 socket.emit("villain_go","kick");
//kick
}
if(e.keyCode==76)
{
 villain_kameha_attack =  true;
 socket.emit("villain_go","kameha");
}
if(e.keyCode==75)
{

villain_specialAttack = true;
socket.emit("villain_go","special");
}
if(e.keyCode==68)
{

var defence_vil=true;
socket.emit("villain_go","defence");
}



});

}


var allow_deathAttack=true;



//////////////////// player 1
socket.on("char",function(data){




  if(gamer==0){

if(data=="left")
{



  if(right_cord<360){

  // if(ground > 50)
  //   ground-=125;
}
else {
  if(ground>50)
ground-=35;
}


}
if(data=="right")
{




  if(ground<780){

  if(right_cord<360){ // ground+=125;

  }
  else
  ground+=35;
bg_shift=0;
}
else {
bg_shift+=10;


}




}
if(data=="jump")
{

  if(right_cord>170&&jump_twice<2)
right_cord-=180;
char_jump_check=true;
jump_twice+=1;

}
if(data=="special")
{

powerful=true;

}
if(data=="power_ball")
{
  console.log("ball received")


   num_a-=6;
   number_a = (num_a).toString();              /////////////////////power limit reached
   string_a = number_a + "%";


  if(num_a<0)
  num_a=0;

  villain_powerBar.style.width=string_a;
  if(num_a>0)
  kameha=true;
  else {
     ctx.drawImage(char,ground,right_cord,190,300);
  }

}
if(data=="punch")
{




    if(Math.abs(ground-villain_ground)<180 && ground > villain_ground)
    if(!power_charge)
    check_char_attack+=1;
  attack=true;

}
if(data=="kick")
{

  if(Math.abs(ground-villain_ground)<180 && ground >villain_ground)
  if(!power_charge)
  check_char_attack+=1;
kick=true;


}
if(data=="head")
{

    if(Math.abs(ground-villain_ground)<200)
    check_char_attack+=1;
  head =true;


}
check_extraPress++;
if(data=="defence")
{
  defence_hero=true;
}
if(data=="diagonal_left")
{ console.log("direction recived")
  direction=true;
}
if(data=="diagonal_right")
{
  char_move_right=true;
}
if(data.char_ground)
{
  ground=data.char_ground;
}

  }









});



/////////////////villain socket
 if(gamer==1){
socket.on("player2",function(data){
 console.log( data);
  if(data=="back")
  {console.log("back")
   villain_back=true;


  }
  if(data=="forward")
  { console.log("frward")
   villain_forward=true;

  }
  if(data=="jump")
  {jump_show=true;

  villain_cord-=120;

  }
  if(data=="head")
  {

  villain_head_attack =  true;

  }
  if(data=="punch")
  {
   villain_punch_attack=true;


  }
  if(data=="kick")
  {
   villain_kick_attack=true;

  //kick
  }
  if(data=="kameha")
  {
   villain_kameha_attack =  true;

  }
  if(data=="special")
  {

  villain_specialAttack = true;

  }
  if(data=="defence")
  {

   defence_vil=true;

  }
  if(data.villain)
  {
    villain_ground=data.villain;
  }
  if(data=="villain_left_diagonal")
  {
    villain_left_diagonal=true;
  }
  if(data=="villain_right_diagonal")
{
  villain_right_diagonal=true;
}

});
}


if(gamer==0){

document.addEventListener("keyup",function(e){
if(e.keyCode==100)
{
  villain_left_pressed=0;

}
if(e.keyCode==102)
{
  villain_right_pressed=0;
}


});



}

var logout=document.getElementById("logout");
logout.addEventListener("click",function(){
  var cook=document.cookie;
  decide(cook);
  var cookie=get_cookie(cook);
  console.log(cookie);


del_cookie('m');
del_cookie('player')

});
