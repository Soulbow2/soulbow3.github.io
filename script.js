const fireOne= document.getElementById("fire-1");
const fireTwo= document.getElementById("fire-2");
const fireThree= document.getElementById("fire-3");
const fireFour= document.getElementById("fire-4");
const fire= document.getElementById("fire");
const uzi = document.getElementById("uzi-1");
const uzi2 = document.getElementById("uzi-2");
const uzi3 = document.getElementById("uzi-3");
const uzi4 = document.getElementById("uzi-4");
const soldier = document.getElementById("soldier");
const movement = document.getElementById("movement");
const count = document.getElementById("count");
const count2 = document.getElementById("count2");
const bird = document.getElementById("bird");
const birdCount = document.getElementById("birdCount");
const ballCount = document.getElementById("ballCount");
const ballCount2 = document.getElementById("ballCount2");
const score = document.getElementById("score");
const wing1 = document.getElementById("wing1");
const wing2 = document.getElementById("wing2");
const spawnPoint2 = document.getElementById("spawnPoint2");
let x = 0;
let y = 0;
let z = 0;
let i = 0;
let b = 0;
let a = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let q = 0;
let w = 0;
let r = 0;
let t = 0;
let m = 0;
let n = 0;
function npc() {  
 
var npc5 = document.createElement("div");
npc5.textContent = ".";
npc5.setAttribute('style', 'height:20px');
npc5.setAttribute('style', 'width:9px');
npc5.style.background= "red";
npc5.style.textAlign= "center";
npc5.style.borderRadius ="9px";
npc5.style.fontSize ="7px";
npc5.style.border= "solid 1px";
npc5.style.marginTop= "75px";
npc5.id = "npc5";       
    
var npc4 = document.createElement("div");
npc4.textContent = ".";
npc4.setAttribute('style', 'height:20px');
npc4.setAttribute('style', 'width:9px');
npc4.style.background= "silver";
npc4.style.textAlign= "center";
npc4.style.borderRadius ="9px";
npc4.style.fontSize ="7px";
npc4.style.border= "solid 1px";
npc4.style.marginTop= "75px";
npc4.id = "npc4";      
    
var npc3 = document.createElement("div");
npc3.textContent = ".";
npc3.setAttribute('style', 'height:20px');
npc3.setAttribute('style', 'width:9px');
npc3.style.background= "blue";
npc3.style.textAlign= "center";
npc3.style.borderRadius ="9px";
npc3.style.fontSize ="7px";
npc3.style.border= "solid 1px";
npc3.style.marginTop= "75px";
npc3.id = "npc3";  
    
var npc2 = document.createElement("div");
npc2.textContent = ".";
npc2.setAttribute('style', 'height:20px');
npc2.setAttribute('style', 'width:9px');
npc2.style.background= "silver";
npc2.style.textAlign= "center";
npc2.style.borderRadius ="9px";
npc2.style.fontSize ="7px";
npc2.style.border= "solid 1px";
npc2.style.marginTop= "75px";
npc2.id = "npc2";    
    
var npc = document.createElement("div");
npc.textContent = ".";
npc.setAttribute('style', 'height:20px');
npc.setAttribute('style', 'width:9px');
npc.style.background= "red";
npc.style.textAlign= "center";
npc.style.borderRadius ="9px";
npc.style.fontSize ="7px";
npc.style.border= "solid 1px";
npc.style.marginTop= "75px";
npc.id = "npc";
var output2 = document.getElementById("spawnPoint2");
output2.appendChild(npc);
output2.appendChild(npc2);
output2.appendChild(npc3);
output2.appendChild(npc4);
output2.appendChild(npc5);

setInterval(() => {
var speedX = 25; 
var speedY = 0;
c += speedX;
d += speedY;
npc.style.transform = `translate(${c}px, ${d}px)`;   
}, 1000);
setInterval(() => {
var speedX = -375; 
var speedY = 0;
c += speedX;
d += speedY;
npc.style.transform = `translate(${c}px, ${d}px)`;   
}, 15000);
    
setInterval(() => {
var speedX = 25; 
var speedY = 0;
e += speedX;
f += speedY;
npc2.style.transform = `translate(${e}px, ${f}px)`;   
}, 1500);
setInterval(() => {
var speedX = -375; 
var speedY = 0;
e += speedX;
f += speedY;
npc2.style.transform = `translate(${e}px, ${f}px)`;   
}, 22500);    

setInterval(() => {
var speedX = 25; 
var speedY = 0;
q += speedX;
w += speedY;
npc3.style.transform = `translate(${q}px, ${w}px)`;   
}, 1000);
setInterval(() => {
var speedX = -375; 
var speedY = 0;
q += speedX;
w += speedY;
npc3.style.transform = `translate(${q}px, ${w}px)`;   
}, 15000);
    
setInterval(() => {
var speedX = 25; 
var speedY = 0;
r += speedX;
t += speedY;
npc4.style.transform = `translate(${r}px, ${t}px)`;   
}, 1500);
setInterval(() => {
var speedX = -375; 
var speedY = 0;
r += speedX;
t += speedY;
npc4.style.transform = `translate(${r}px, ${t}px)`;   
}, 22500); 

setInterval(() => {
var speedX = 25; 
var speedY = 0;
m += speedX;
n += speedY;
npc5.style.transform = `translate(${m}px, ${n}px)`;   
}, 1000);
setInterval(() => {
var speedX = -375; 
var speedY = 0;
m += speedX;
n += speedY;
npc5.style.transform = `translate(${m}px, ${n}px)`;   
}, 15000);    
}


npc();


function call() {
setTimeout(() => {
  ball1();
repeatball1();}, 150);    
     
}

call();




function repeatball1() {
let timeout2 = setInterval(() => {     
var speedX = 25; 
var speedY = 0;
b += speedX;
a += speedY;
ball.style.transform = `translate(${b}px, ${a}px)`;  
ballCount.innerHTML++;
}, 1000);
setInterval(() => {  
clearTimeout2(timeout);
ballCount.innerHTML="0";}, 15000);}

function ball1() {
switch (true) {
case ballCount.innerHTML == "0":        
var ball = document.createElement("div");
ball.textContent = ".";
ball.setAttribute('style', 'height:17px');
ball.setAttribute('style', 'width:17px');
ball.style.background= "red";
ball.style.textAlign= "center";
ball.style.borderRadius ="9px";
ball.style.fontSize ="7px";
ball.style.border= "solid 1px";
ball.style.marginTop= "25px";
ball.id = "ball";
var output = document.getElementById("spawnPoint");
output.appendChild(ball);       
setInterval(() => {
var speedX = -375; 
var speedY = 0;
b += speedX;
a += speedY;
ball.style.transform = `translate(${b}px, ${a}px)`;   
ballCount.innerHTML = "0";
}, 15000);
break;}}

function myFuncFire() {
switch(true) {
    case ballCount.innerHTML != birdCount.innerHTML:    
    
if (count2.innerHTML == birdCount.innerHTML && fire.style.background == "red") {
score.innerHTML++;}
break;}}

function birdMovement() {
setInterval(() => {
var speedX = 25; 
var speedY = 0;
z += speedX;
i += speedY;
bird.style.transform = `translate(${z}px, ${i}px)`; 
birdCount.innerHTML++;    
}, 1000);    

setInterval(() => {
var speedX = -375; 
var speedY = 0;
z += speedX;
i += speedY;
bird.style.transform = `translate(${z}px, ${i}px)`;
birdCount.innerHTML = "0";    
}, 15000);        
    

setInterval(() => {
wing1.classList.add("blank");
wing2.classList.remove("blank");    
}, 1000);
            
setInterval(() => {
wing1.classList.remove("blank");
wing2.classList.add("blank");    
}, 2000);            
}
birdMovement();

function shiftObject1() {  
switch(true) {
    case count2.innerHTML != "0":    
    var speedX = -25; 
var speedY = 0;
x += speedX;
y += speedY;
movement.style.transform = `translate(${x}px, ${y}px)`;
switch(true) {      
    case count2.innerHTML == "1":
    count2.innerHTML="0";
    break;
case count2.innerHTML == "2":
count2.innerHTML="1";
break;           
case count2.innerHTML == "3":
count2.innerHTML="2";
break;  
case count2.innerHTML == "4":
count2.innerHTML="3";
break;
case count2.innerHTML == "5":
count2.innerHTML="4";
break;  
case count2.innerHTML == "6":
count2.innerHTML="5";
break;
case count2.innerHTML == "7":
count2.innerHTML="6";
break;  
case count2.innerHTML == "8":
count2.innerHTML="7";
break;
case count2.innerHTML == "9":
count2.innerHTML="8";
break;  
case count2.innerHTML == "10":
count2.innerHTML="9";
break;
case count2.innerHTML == "11":
count2.innerHTML="10";
break;  
case count2.innerHTML == "12":
count2.innerHTML="11";
break;
case count2.innerHTML == "13":
count2.innerHTML="12";
break;
case count2.innerHTML == "14":
count2.innerHTML="13";
break;  
case count2.innerHTML == "15":
count2.innerHTML="14";
break;}break;} }

function shiftObject2() {  
switch(true) {
    case count2.innerHTML != "15":
    var speedX = 25; 
var speedY = 0;
x += speedX;
y += speedY;
movement.style.transform = `translate(${x}px, ${y}px)`;
switch(true) {
case count2.innerHTML == "0":
count2.innerHTML="1";
break;           
case count2.innerHTML == "1":
count2.innerHTML="2";
break;           
case count2.innerHTML == "2":
count2.innerHTML="3";
break;  
case count2.innerHTML == "3":
count2.innerHTML="4";
break;
case count2.innerHTML == "4":
count2.innerHTML="5";
break;  
case count2.innerHTML == "5":
count2.innerHTML="6";
break;
case count2.innerHTML == "6":
count2.innerHTML="7";
break;  
case count2.innerHTML == "7":
count2.innerHTML="8";
break;
case count2.innerHTML == "8":
count2.innerHTML="9";
break;  
case count2.innerHTML == "9":
count2.innerHTML="10";
break;
case count2.innerHTML == "10":
count2.innerHTML="11";
break;  
case count2.innerHTML == "11":
count2.innerHTML="12";
break;
case count2.innerHTML == "12":
count2.innerHTML="13";
break;
case count2.innerHTML == "13":
count2.innerHTML="14";
break;  
case count2.innerHTML == "14":
count2.innerHTML="15";
break;} break;}  
}

function shiftObject3() {  
switch(true) {
    case count.innerHTML != "15":
var speedX = 0; 
var speedY = 25;
x += speedX;
y += speedY;
movement.style.transform = `translate(${x}px, ${y}px)`;
switch(true) {
case count.innerHTML == "0":
count.innerHTML="1";
break;           
case count.innerHTML == "1":
count.innerHTML="2";
break;           
case count.innerHTML == "2":
count.innerHTML="3";
break;  
case count.innerHTML == "3":
count.innerHTML="4";
break;
case count.innerHTML == "4":
count.innerHTML="5";
break;  
case count.innerHTML == "5":
count.innerHTML="6";
break;
case count.innerHTML == "6":
count.innerHTML="7";
break;  
case count.innerHTML == "7":
count.innerHTML="8";
break;
case count.innerHTML == "8":
count.innerHTML="9";
break;  
case count.innerHTML == "9":
count.innerHTML="10";
break;
case count.innerHTML == "10":
count.innerHTML="11";
break;  
case count.innerHTML == "11":
count.innerHTML="12";
break;
case count.innerHTML == "12":
count.innerHTML="13";
break;
case count.innerHTML == "13":
count.innerHTML="14";
break;  
case count.innerHTML == "14":
count.innerHTML="15";
break;        
}break;}}

function shiftObject4() {  
switch(true) {
    case count.innerHTML != "0":
    
    var speedX = 0; 
var speedY = -25;
x += speedX;
y += speedY;
movement.style.transform = `translate(${x}px, ${y}px)`;

switch(true) {      
    case count.innerHTML == "1":
    count.innerHTML="0";
    break;
case count.innerHTML == "2":
count.innerHTML="1";
break;           
case count.innerHTML == "3":
count.innerHTML="2";
break;  
case count.innerHTML == "4":
count.innerHTML="3";
break;
case count.innerHTML == "5":
count.innerHTML="4";
break;  
case count.innerHTML == "6":
count.innerHTML="5";
break;
case count.innerHTML == "7":
count.innerHTML="6";
break;  
case count.innerHTML == "8":
count.innerHTML="7";
break;
case count.innerHTML == "9":
count.innerHTML="8";
break;  
case count.innerHTML == "10":
count.innerHTML="9";
break;
case count.innerHTML == "11":
count.innerHTML="10";
break;  
case count.innerHTML == "12":
count.innerHTML="11";
break;
case count.innerHTML == "13":
count.innerHTML="12";
break;
case count.innerHTML == "14":
count.innerHTML="13";
break;  
case count.innerHTML == "15":
count.innerHTML="14";
break; }break;}}

function moveObjectLeft() {  
switch(true) {
    case count2.innerHTML != "0":
    var speedX = -25; 
var speedY = 0;
x += speedX;
y += speedY;
movement.style.transform = `translate(${x}px, ${y}px)`;
uzi.classList.add("blank");
uzi3.classList.add("blank");  
uzi4.classList.add("blank");    
uzi2.classList.remove("blank");
fire.style.background="blue";

switch(true) {      
    case count2.innerHTML == "1":
    count2.innerHTML="0";
    break;
case count2.innerHTML == "2":
count2.innerHTML="1";
break;           
case count2.innerHTML == "3":
count2.innerHTML="2";
break;  
case count2.innerHTML == "4":
count2.innerHTML="3";
break;
case count2.innerHTML == "5":
count2.innerHTML="4";
break;  
case count2.innerHTML == "6":
count2.innerHTML="5";
break;
case count2.innerHTML == "7":
count2.innerHTML="6";
break;  
case count2.innerHTML == "8":
count2.innerHTML="7";
break;
case count2.innerHTML == "9":
count2.innerHTML="8";
break;  
case count2.innerHTML == "10":
count2.innerHTML="9";
break;
case count2.innerHTML == "11":
count2.innerHTML="10";
break;  
case count2.innerHTML == "12":
count2.innerHTML="11";
break;
case count2.innerHTML == "13":
count2.innerHTML="12";
break;
case count2.innerHTML == "14":
count2.innerHTML="13";
break;  
case count2.innerHTML == "15":
count2.innerHTML="14";       
break;}break;}        
}

function moveObjectRight() {  
switch(true) {
    case count2.innerHTML != "15":
var speedX = 25; 
var speedY = 0;
x += speedX;
y += speedY;
movement.style.transform = `translate(${x}px, ${y}px)`;
uzi3.classList.add("blank");
uzi4.classList.add("blank");    
uzi.classList.remove("blank");
uzi2.classList.add("blank");
fire.style.background="green";

switch(true) {
case count2.innerHTML == "0":
count2.innerHTML="1";
break;           
case count2.innerHTML == "1":
count2.innerHTML="2";
break;           
case count2.innerHTML == "2":
count2.innerHTML="3";
break;  
case count2.innerHTML == "3":
count2.innerHTML="4";
break;
case count2.innerHTML == "4":
count2.innerHTML="5";
break;  
case count2.innerHTML == "5":
count2.innerHTML="6";
break;
case count2.innerHTML == "6":
count2.innerHTML="7";
break;  
case count2.innerHTML == "7":
count2.innerHTML="8";
break;
case count2.innerHTML == "8":
count2.innerHTML="9";
break;  
case count2.innerHTML == "9":
count2.innerHTML="10";
break;
case count2.innerHTML == "10":
count2.innerHTML="11";
break;  
case count2.innerHTML == "11":
count2.innerHTML="12";
break;
case count2.innerHTML == "12":
count2.innerHTML="13";
break;
case count2.innerHTML == "13":
count2.innerHTML="14";
break;  
case count2.innerHTML == "14":
count2.innerHTML="15";       
break;} break;}   
}

function moveObjectDown() {  
switch(true) {
    case count.innerHTML != "15":
var speedX = 0; 
var speedY = 25;
x += speedX;
y += speedY;
       
movement.style.transform = `translate(${x}px, ${y}px)`;
uzi.classList.add("blank");
uzi2.classList.add("blank");
uzi4.classList.add("blank");    
uzi3.classList.remove("blank");
fire.style.background="yellow";

switch(true) {
case count.innerHTML == "0":
count.innerHTML="1";
break;           
case count.innerHTML == "1":
count.innerHTML="2";
break;           
case count.innerHTML == "2":
count.innerHTML="3";
break;  
case count.innerHTML == "3":
count.innerHTML="4";
break;
case count.innerHTML == "4":
count.innerHTML="5";
break;  
case count.innerHTML == "5":
count.innerHTML="6";
break;
case count.innerHTML == "6":
count.innerHTML="7";
break;  
case count.innerHTML == "7":
count.innerHTML="8";
break;
case count.innerHTML == "8":
count.innerHTML="9";
break;  
case count.innerHTML == "9":
count.innerHTML="10";
break;
case count.innerHTML == "10":
count.innerHTML="11";
break;  
case count.innerHTML == "11":
count.innerHTML="12";
break;
case count.innerHTML == "12":
count.innerHTML="13";
break;
case count.innerHTML == "13":
count.innerHTML="14";
break;  
case count.innerHTML == "14":
count.innerHTML="15";
break;        
}break;}}




function moveObjectUp() { 
switch(true) {
    case count.innerHTML != "0":    
var speedX = 0; 
var speedY = -25;
x += speedX;
y += speedY;
    movement.style.transform = `translate(${x}px, ${y}px)`;
uzi.classList.add("blank");
uzi2.classList.add("blank");
uzi3.classList.add("blank");    
uzi4.classList.remove("blank");
fire.style.background="red";

    
switch(true) {      
    case count.innerHTML == "1":
    count.innerHTML="0";
    break;
case count.innerHTML == "2":
count.innerHTML="1";
break;           
case count.innerHTML == "3":
count.innerHTML="2";
break;  
case count.innerHTML == "4":
count.innerHTML="3";
break;
case count.innerHTML == "5":
count.innerHTML="4";
break;  
case count.innerHTML == "6":
count.innerHTML="5";
break;
case count.innerHTML == "7":
count.innerHTML="6";
break;  
case count.innerHTML == "8":
count.innerHTML="7";
break;
case count.innerHTML == "9":
count.innerHTML="8";
break;  
case count.innerHTML == "10":
count.innerHTML="9";
break;
case count.innerHTML == "11":
count.innerHTML="10";
break;  
case count.innerHTML == "12":
count.innerHTML="11";
break;
case count.innerHTML == "13":
count.innerHTML="12";
break;
case count.innerHTML == "14":
count.innerHTML="13";
break;  
case count.innerHTML == "15":
count.innerHTML="14";
break;                
}
break;}}




function myFunc () {
if (fire.style.background == "green") {    
    
setTimeout(function() {  
soldier.style.transform = 'rotate(-1deg)';       
}, 150);        
setTimeout(function() {         
soldier.style.transform = 'rotate(1deg)';  
}, 300);    
setTimeout(function() {      
soldier.style.transform = 'rotate(-1deg)';
}, 450);          
setTimeout(function() {      
soldier.style.transform = 'rotate(1deg)';
}, 600);          
setTimeout(function() {      
uzi.style.transform = 'rotate(-5deg)';
}, 150);          
setTimeout(function() {    
uzi.style.transform = 'rotate(5deg)';
}, 300);    
setTimeout(function() {    
uzi.style.transform = 'rotate(-5deg)';
}, 450);          
setTimeout(function() {    
uzi.style.transform = 'rotate(5deg)';
}, 600);
setTimeout(function() {        
fireOne.innerHTML += "-";
}, 20);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 40);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 60);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 80);
setTimeout(function() {        
fireOne.innerHTML += "-";
}, 100); 
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 120);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 140);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 160);
setTimeout(function() {        
fireOne.innerHTML += "-";
}, 180);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 200);   
setTimeout(function() {        
fireOne.innerHTML += "-";
}, 220);
setTimeout(function() {        
fireOne.innerHTML += "-";
}, 240);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 260);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 280);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 300);   
setTimeout(function() {        
fireOne.innerHTML += "-";
}, 320);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 340);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 360);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 380);
setTimeout(function() {       
fireOne.innerHTML += "-";
}, 400);       
setTimeout(function() {        
fireOne.innerHTML = "";
}, 420);}
else if (fire.style.background == "blue") { 
setTimeout(function() {  
soldier.style.transform = 'rotate(-1deg)';       
}, 150);        
setTimeout(function() {         
soldier.style.transform = 'rotate(1deg)';  
}, 300);    
setTimeout(function() {      
soldier.style.transform = 'rotate(-1deg)';
}, 450);         
setTimeout(function() {      
soldier.style.transform = 'rotate(1deg)';
}, 600);       
setTimeout(function() {    
uzi2.style.transform = 'rotate(-5deg)';
}, 150);        
setTimeout(function() { 
uzi2.style.transform = 'rotate(5deg)';
}, 300);    
setTimeout(function() {   
uzi2.style.transform = 'rotate(-5deg)';
}, 450);        
setTimeout(function() { 
uzi2.style.transform = 'rotate(5deg)';
}, 600);
setTimeout(function() {        
fireTwo.innerHTML += "-";
}, 20);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 40);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 60);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 80);
setTimeout(function() {        
fireTwo.innerHTML += "-";
}, 100); 
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 120);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 140);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 160);
setTimeout(function() {        
fireTwo.innerHTML += "-";
}, 180);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 200);  
setTimeout(function() {        
fireTwo.innerHTML += "-";
}, 220);
setTimeout(function() {        
fireTwo.innerHTML += "-";
}, 240);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 260);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 280);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 300);  
setTimeout(function() {        
fireTwo.innerHTML += "-";
}, 320);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 340);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 360);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 380);
setTimeout(function() {       
fireTwo.innerHTML += "-";
}, 400);  
setTimeout(function() {        
fireTwo.innerHTML = "";
}, 420);}


else if (fire.style.background == "yellow") { 
setTimeout(function() {  
soldier.style.transform = 'rotate(-1deg)';       
}, 150);        
setTimeout(function() {         
soldier.style.transform = 'rotate(1deg)';  
}, 300);    
setTimeout(function() {      
soldier.style.transform = 'rotate(-1deg)';
}, 450);         
setTimeout(function() {      
soldier.style.transform = 'rotate(1deg)';
}, 600);       
setTimeout(function() {    
uzi3.style.transform = 'rotate(-5deg)';
}, 150);        
setTimeout(function() { 
uzi3.style.transform = 'rotate(5deg)';
}, 300);    
setTimeout(function() {   
uzi3.style.transform = 'rotate(-5deg)';
}, 450);        
setTimeout(function() { 
uzi3.style.transform = 'rotate(5deg)';
}, 600);
setTimeout(function() {        
fireThree.innerHTML += "-";
}, 20);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 40);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 60);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 80);
setTimeout(function() {        
fireThree.innerHTML += "-";
}, 100); 
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 120);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 140);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 160);
setTimeout(function() {        
fireThree.innerHTML += "-";
}, 180);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 200);  
setTimeout(function() {        
fireThree.innerHTML += "-";
}, 220);
setTimeout(function() {        
fireThree.innerHTML += "-";
}, 240);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 260);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 280);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 300);  
setTimeout(function() {        
fireThree.innerHTML += "-";
}, 320);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 340);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 360);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 380);
setTimeout(function() {       
fireThree.innerHTML += "-";
}, 400);  
setTimeout(function() {        
fireThree.innerHTML = "";
}, 420);}


else if (fire.style.background == "red") { 
setTimeout(function() {  
soldier.style.transform = 'rotate(-1deg)';       
}, 150);        
setTimeout(function() {         
soldier.style.transform = 'rotate(1deg)';  
}, 300);    
setTimeout(function() {      
soldier.style.transform = 'rotate(-1deg)';
}, 450);         
setTimeout(function() {      
soldier.style.transform = 'rotate(1deg)';
}, 600);       
setTimeout(function() {    
uzi4.style.transform = 'rotate(-5deg)';
}, 150);        
setTimeout(function() { 
uzi4.style.transform = 'rotate(5deg)';
}, 300);    
setTimeout(function() {   
uzi4.style.transform = 'rotate(-5deg)';
}, 450);        
setTimeout(function() { 
uzi4.style.transform = 'rotate(5deg)';
}, 600);
setTimeout(function() {        
fireFour.innerHTML += "-";
}, 20);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 40);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 60);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 80);
setTimeout(function() {        
fireFour.innerHTML += "-";
}, 100); 
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 120);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 140);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 160);
setTimeout(function() {        
fireFour.innerHTML += "-";
}, 180);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 200);  
setTimeout(function() {        
fireFour.innerHTML += "-";
}, 220);
setTimeout(function() {        
fireFour.innerHTML += "-";
}, 240);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 260);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 280);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 300);  
setTimeout(function() {        
fireFour.innerHTML += "-";
}, 320);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 340);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 360);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 380);
setTimeout(function() {       
fireFour.innerHTML += "-";
}, 400);  
setTimeout(function() {        
fireFour.innerHTML = "";
}, 420);}


}

