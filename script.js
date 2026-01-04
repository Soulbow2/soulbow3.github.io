const fireOne= document.getElementById("fire-1");
const fireTwo= document.getElementById("fire-2");
const uzi = document.getElementById("uzi-1");
const soldier = document.getElementById("soldier");
const uzi2 = document.getElementById("uzi-2");
const soldier2 = document.getElementById("soldier2");
const movement = document.getElementById("movement");
const movement2 = document.getElementById("movement2");
const node = document.getElementById("node");
const node2 = document.getElementById("node2");
const node3 = document.getElementById("node3");
const count = document.getElementById("count");
const count2 = document.getElementById("count2");






let x = 0;
let y = 0;

let z = 0;
let i = 0;

function moveObjectDown2() {

switch (true) {
        
    case node3.style.background != "yellow":
        
            
    
var speedX = 0; 
var speedY = 25;
    z += speedX;
    i += speedY;

    movement2.style.transform = `translate(${z}px, ${i}px)`;
 break;}
    
switch (true) {
        case node3.style.background != "yellow":
           
    
if (node3.style.background == "green") {
node3.style.background="red";}   
else if (node3.style.background == "red") {
node3.style.background="pink";}
else if (node3.style.background == "pink") {
node3.style.background="blue";}
else if (node3.style.background == "blue") {
node3.style.background="yellow";}
else {node3.style.background="green";}
break;}}

function moveObjectUp2() {

switch (true) {
        
    case node3.style.background != "green":
        
        
    var speedX = 0; 
var speedY = -25;
    z += speedX;
    i += speedY;

    movement2.style.transform = `translate(${z}px, ${i}px)`;
break;}
    
switch (true) {
        case node3.style.background != "green":
           
    
    
if (node3.style.background == "yellow") {
node3.style.background="blue";}     
else if (node3.style.background == "blue") {
node3.style.background="pink";}
else if (node3.style.background == "pink") {
node3.style.background="red";}
else if (node3.style.background == "red") {
node3.style.background="green";} 
else {node3.style.background="yellow";}
   
break;}
}










function moveObjectDown() {

switch (true) {
        
    case node.style.background != "yellow":
        
            
    
var speedX = 0; 
var speedY = 25;
    x += speedX;
    y += speedY;

    movement.style.transform = `translate(${x}px, ${y}px)`;
 break;}
    
switch (true) {
        case node.style.background != "yellow":
           
    
if (node.style.background == "green") {
node.style.background="red";}   
else if (node.style.background == "red") {
node.style.background="pink";}
else if (node.style.background == "pink") {
node.style.background="blue";}
else if (node.style.background == "blue") {
node.style.background="yellow";}
else {node.style.background="green";}
break;}}

function moveObjectUp() {

switch (true) {
        
    case node.style.background != "green":
        
        
    var speedX = 0; 
var speedY = -25;
    x += speedX;
    y += speedY;

    movement.style.transform = `translate(${x}px, ${y}px)`;
break;}
    
switch (true) {
        case node.style.background != "green":
           
    
    
if (node.style.background == "yellow") {
node.style.background="blue";}     
else if (node.style.background == "blue") {
node.style.background="pink";}
else if (node.style.background == "pink") {
node.style.background="red";}
else if (node.style.background == "red") {
node.style.background="green";} 
else {node.style.background="yellow";}
   
break;}
}




function amyFuncCount() {
 if (node.style.background=="green" && node3.style.background=="green") {
count.innerHTML++;}
else  if (node.style.background=="blue" && node3.style.background=="blue") {
count.innerHTML++;}
else  if (node.style.background=="pink" && node3.style.background=="pink") {
count.innerHTML++;}    
else  if (node.style.background=="yellow" && node3.style.background=="yellow") {
count.innerHTML++;} 
else  if (node.style.background=="red" && node3.style.background=="red") {
count.innerHTML++;}    
}

function amyFuncCount2() {
 if (node3.style.background=="green" && node.style.background=="green") {
count2.innerHTML++;}
else  if (node3.style.background=="blue" && node.style.background=="blue") {
count2.innerHTML++;}
else  if (node3.style.background=="pink" && node.style.background=="pink") {
count2.innerHTML++;}    
else  if (node3.style.background=="yellow" && node.style.background=="yellow") {
count2.innerHTML++;} 
else  if (node3.style.background=="red" && node.style.background=="red") {
count2.innerHTML++;}    
}



function myFunc () {      
setTimeout(function() {  
soldier.style.transform = 'rotate(-2deg)';       
}, 150);      
    
setTimeout(function() {         
soldier.style.transform = 'rotate(2deg)';  
}, 300);    
 
setTimeout(function() {      
soldier.style.transform = 'rotate(-2deg)';
}, 450);        
  
setTimeout(function() {      
soldier.style.transform = 'rotate(2deg)';
}, 600);    
      
setTimeout(function() {   
   
uzi.style.transform = 'rotate(-10deg)';
}, 150);      
    
setTimeout(function() { 
   
uzi.style.transform = 'rotate(10deg)';
}, 300);    
 
setTimeout(function() { 
    
uzi.style.transform = 'rotate(-10deg)';
}, 450);        
  
setTimeout(function() { 
    
uzi.style.transform = 'rotate(10deg)';
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
}, 420);  
}







function myFunc2 () {      
setTimeout(function() {  
soldier2.style.transform = 'rotate(-2deg)';       
}, 150);      
    
setTimeout(function() {         
soldier2.style.transform = 'rotate(2deg)';  
}, 300);    
 
setTimeout(function() {      
soldier2.style.transform = 'rotate(-2deg)';
}, 450);        
  
setTimeout(function() {      
soldier2.style.transform = 'rotate(2deg)';
}, 600);    
      
setTimeout(function() {   
   
uzi2.style.transform = 'rotate(-10deg)';
}, 150);      
    
setTimeout(function() { 
   
uzi2.style.transform = 'rotate(10deg)';
}, 300);    
 
setTimeout(function() { 
    
uzi2.style.transform = 'rotate(-10deg)';
}, 450);        
  
setTimeout(function() { 
    
uzi2.style.transform = 'rotate(10deg)';
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
}, 420);  
}
