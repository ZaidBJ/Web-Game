


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
var villain_kameha_hit=0;
var audio_played=0;
var villain_energy_amount=100;
var to_move=0;
var num_a=100;
var num_b=100;
var char_no_movement=false;
var power_charge=false;
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
var direction=true;
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



var restart=document.getElementById("restart");

restart.addEventListener("click",function(){
  document.location.href="";
});


function gravity(){
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
console.log(explosion_location.length)





 var check_moves = Math.random() >=0.5;
 var head_show =  Math.random() >=0.5;
 var kameha_show =  Math.random() >=0.34;             ////////////------------------------villain_event--------------------------------//////
 var  jump_show = Math.random() >= 0.89;
 var  DeathAttack = Math.random() >= 0.99;
 var defence_vil=Math.random() >=0.78;
var allow_deathAttack=true;

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
  if(damage_count==3)
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
villain_ground-=20;

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
    if(hero_wait>0&& hero_wait<4)
    ground+=0;
    else
    ground=ground+130;
  ctx.drawImage(char_hurt,ground,right_cord,190,300);
  hero_wait=0;

char_injured=false;
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
if(direction && ground > 10)
ground-=35;
else  if(ground<840) {
  ground+=35;
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
  {if(right_cord<350)
  if(direction)
  ground-=25;
  else {
    ground+=25;
  }
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
  }
//kick ///
}
else {
    ctx.drawImage(char_kick,ground-55,right_cord+20,258,280);
    kick=false;
}
}
else {
  ///////////////head////////////////////
  ctx.drawImage(char_head,ground-160,right_cord,195,240);
  head=false;
  if(char_attack && !backout && !kameha_show && !jump_show)
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

if(Math.random()>0.9)
jump_show=true;        //////////villain may dodge hero most powerful att



if(((villain_cord - right_cord) ==0) && !(villain_onFloor >0) && !jump_show){

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




if(ball.length>0)
{
  for(var i=0;i<ball.length;i++){
    if(ball_cords[i]>0)
  //  console.log("ss"+ i +  " " +(ball_cords[i]-villain_ground))
  if((ball_cords[i]-villain_ground)<150 && (ball_cords[i]-villain_ground)>-50 && (ground-villain_ground)>100)
  {
console.log("jump");
console.log(villain_kameha_hit);

  kameha_show=false;
  if(villain_kameha_hit <10 && villain_kameha_hit>0) {  //////////////////////villain can't jump on kameha after power attack by char
    defend=Math.random()>=0.8;
        villain_kameha_hit+=1;
if(Math.abs(ball_cords[i]-villain_ground )<70&& ball_cords[i]-villain_ground>-30&& villain_cord==360)
{



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
check_char_attack+=1;
ball_cords[i]-=1000;



}
  }
    else {
          jump_show=true;
      villain_kameha_hit=0;
      defend=false;
    }
  check_moves=false;                  ////////////////////////to jump villain on character kamehameha////////////////////
  head_show=false;
  DeathAttack=false;
  break;
  }
else {
  defend=false;
   check_moves = Math.random() >=0.5;
   head_show =  Math.random() >=0.5;
   kameha_show =  Math.random() >=0.94;

   DeathAttack = Math.random() >= 0.96;

}
}
}

if(num_b==0)
{
  DeathAttack=false;                  ///////so that character don;t use this power once energy limit is reached
  kameha_show=false;
  backout=Math.random()>0.8;
}


if(power_charge)
{  if(num_b==0)
  {
    villain_energy_amount-=5;
  }
  if(villain_onFloor==3){
    ctx.drawImage(villain_up,villain_ground,villain_cord,210,290);              ////////////////villain self defence energy
    villain_onFloor+=1;
}
else
if(villain_onFloor==4){
ctx.drawImage(villain_upa,villain_ground,villain_cord,210,290);
villain_onFloor+=1;
}
else
if(villain_onFloor==5){
  ctx.drawImage(villain_upa,villain_ground,villain_cord,210,290);
  villain_onFloor+=1;

}
else
if(villain_onFloor==6){
ctx.drawImage(villain_upb,villain_ground,villain_cord,210,290);
power_charge=false;
villain_onFloor=0;
if(ground-villain_ground <300){
hero_hurt=true;
ground+=70;
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
if(villain_laidDown>0&& villain_laidDown<3)
{
ctx.drawImage(villain_standUp,villain_ground-170,villain_cord+120,230,170);

}
if(villain_laidDown==1)
villain_ground-=170;

}
else{
if((!defence_vil|| no_defence) && check_char_attack>0)
{villain_onFloor+=1;
  if(Math.random()>0.3 && villain_onFloor ==3 && !power_charge&&num_b==0)
  {                                                                                   ///////////////to increase villain self defemce when energy limit is reached
  power_charge=true;
  }

  if(Math.random()>0.5 && villain_onFloor ==3 && !power_charge&&num_b>0)
  {
  power_charge=true;
  }
  else{
  if(villain_onFloor==6){
  ctx.drawImage(villain_fall,villain_ground-120,right_cord +180,290,110);
  villain_onFloor=0;
    villain_laidDown=10;
      villain_kameha_hit=1;
}
 else
 {  ctx.drawImage(villain_injured,villain_ground,villain_cord+35,190,300);
console.log("punch")
DeathAttack=false;
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

  if(num_b<0)
  num_b=0;
  if(num_b==0)
  {
  DeathAttack=false;
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
  /////////////////////////////////////

}
/////////////////////////////////////villain jump////////////////////////
else{
if((jump_show || villain_jump_check==1) && villain_ground < (ground-60) ||defend && villain_ground > 100 ||defend && villain_jump_check<2)///////////////////////////////////////////////
{
  villain_cord-=120;
  var move_left= Math.random() > 0.7;
  if(!(ground-villain_ground > 80))
  if(move_left)
  villain_ground-=70;
villain_movefrwd=false;
ctx.drawImage(villain_jump,villain_ground+30,villain_cord,250,220);
villain_jump_check+=1;
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
if(head_show && ground-villain_ground>280 && ground-villain_ground<300)
{ if(ground-villain_ground>160){
   villain_ground+=160;
   hero_hurt=true;

   number -=15;
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
 }
   else {
     villain_ground+=(ground-villain_ground);
     hero_hurt=true;
   }
  ctx.drawImage(villain_rhead,villain_ground,villain_cord+100,270,150);
///////////////////////////villain_head_ends//////////////////////////
}

else {


if((ground-villain_ground)>110 && (!backout || vapis)){
  if(villain_ground>150)
  vapis=false;
villain_ground+=50
if(count_villain%2==0)
{
  ctx.drawImage(villain_stand,villain_ground,villain_cord,190,300);
}
else {
  ctx.drawImage(villain_stand1,villain_ground-33,villain_cord,190,300);
}
}
///////////////////////////////////////villain left movement////////////////////////////
else {
  if(backout){
    if(villain_ground-50<0){
    vapis=true;
    villain_ground+=80;
  }else {
    if(villain_movefrwd&&(ground-villain_ground)>60)
    villain_ground+=50;
      villain_ground-=50;
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

if(!backout){
  if(check_moves){



    ctx.drawImage(villain_kick,villain_ground-track,villain_cord,370,300);
    if(Math.abs((ground-villain_ground))<200 && !defence_hero  && (right_cord-villain_cord)==0){
      if(ground<850)
    ground+=40;
  hero_hurt=true;}
  else {
    if(ground-villain_ground <50 & defence_hero)
    ground+=20;
  }
  powerful=false;       ////////////////////so that her power_beam attack gets dead else he will attack even after getting ready for beam was interrupted
  }///////////////////////////////backout to decide whether to attack after single hit
    else {
      ctx.drawImage(villain_punch,villain_ground-80,villain_cord,300,300);
      if(Math.abs(ground-villain_ground)<200 && !defence_hero && (right_cord-villain_cord)==0){
        if(ground<850)
      ground+=40;
    hero_hurt=true;}
    else {
      if(ground-villain_ground <50 & defence_hero)
      ground+=20;
    }
    powerful=false;
}
backout = Math.random() >= 0.4;   ///////////////to decide if villain goes back after one punch or kick


////ground+=100;/////////////////////////////////////////////////////////////////////////////////////////////////
setTimeout(function t(){backout= false; },(Math.random()+1)*1500)
}}
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
///////////////////////villain_kameha  ball rendering ends here////////////////////////////

gravity();



////////////////continue villain beating/////////////////
if(no_defence && check_char_attack==1 && !jump_show)
no_defence=false;

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
if(audio_played==0){
    playAudio();
    audio_played=1;
    setTimeout(function(){audio_played=1},120000);
  }
    if(!no_movement){ ////////////////////no movement when user attacked by villlain Death Attack
  if(check_extraPress-count<10){
  if(e.keyCode==37)
  {direction=true;
    if(right_cord<360){
    if(ground > 50)
      ground-=125;}
  else {
    if(ground>50)
  ground-=35;
  }

}
if(e.keyCode==39)
{direction=false;
  if(ground<780){
  if(right_cord<360)
  ground+=125;
  else
  ground+=35;
bg_shift=0;
}
else {
bg_shift+=10;


}
}
if(e.keyCode==65)
{


  if(Math.abs(ground-villain_ground)<180 && ground > villain_ground)
  if(!power_charge)
  check_char_attack+=1;
attack=true;
}
if(e.keyCode==83)
{if(Math.abs(ground-villain_ground)<180 && ground >villain_ground)
  if(!power_charge)
  check_char_attack+=1;
kick=true;

}
if(e.keyCode==38){

  ////check character is in canvas///////////////
  if(right_cord>170&&jump_twice<2)
right_cord-=180;
char_jump_check=true;
jump_twice+=1;
}
if(e.keyCode==72)
{if(Math.abs(ground-villain_ground)<300)
  check_char_attack+=1;
head =true;

}
if(e.keyCode==90)
{

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
if(e.keyCode==88)
powerful=true;
check_extraPress++;
}
if(e.keyCode==68){
defence_hero=true


}
}
}
);



var logout=document.getElementById("logout");
logout.addEventListener("click",function(){
  var cook=document.cookie;
  decide(cook);
  var cookie=get_cookie(cook);
  console.log(cookie);



del_cookie('m');
del_cookie('player')

});
