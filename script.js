const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const thirteen = document.getElementById("thirteen");
const fourteen = document.getElementById("fourteen");
const fifteen = document.getElementById("fifteen");
const sixteen = document.getElementById("sixteen");
const seventeen = document.getElementById("seventeen");
const eighteen = document.getElementById("eighteen");
const nineteen = document.getElementById("nineteen");
const twenty = document.getElementById("twenty");
const twentyone = document.getElementById("twentyone");
const twentytwo = document.getElementById("twentytwo");
const twentythree = document.getElementById("twentythree");
const twentyfour = document.getElementById("twentyfour");
const twentyfive = document.getElementById("twentyfive");
const twentysix = document.getElementById("twentysix");
const twentyseven = document.getElementById("twentyseven");
const twentyeight = document.getElementById("twentyeight");
const twentynine = document.getElementById("twentynine");
const thirty = document.getElementById("thirty");
const thirtyone = document.getElementById("thirtyone");
const thirtytwo = document.getElementById("thirtytwo");
const thirtythree = document.getElementById("thirtythree");
const thirtyfour = document.getElementById("thirtyfour");
const thirtyfive = document.getElementById("thirtyfive");
const thirtysix = document.getElementById("thirtysix");
const thirtyseven = document.getElementById("thirtyseven");
const thirtyeight = document.getElementById("thirtyeight");
const thirtynine = document.getElementById("thirtynine");
const fourty = document.getElementById("fourty");
const fourtyone = document.getElementById("fourtyone");
const fourtytwo = document.getElementById("fourtytwo");
const fourtythree = document.getElementById("fourtythree");
const fourtyfour = document.getElementById("fourtyfour");
const fourtyfive = document.getElementById("fourtyfive");
const fourtysix = document.getElementById("fourtysix");
const fourtyseven = document.getElementById("fourtyseven");
const fourtyeight = document.getElementById("fourtyeight");
const fourtynine = document.getElementById("fourtynine");
const fifty = document.getElementById("fifty");
const fiftyone = document.getElementById("fiftyone");
const fiftytwo = document.getElementById("fiftytwo");
const fiftythree = document.getElementById("fiftythree");
const fiftyfour = document.getElementById("fiftyfour");
const fiftyfive = document.getElementById("fiftyfive");
const fiftysix = document.getElementById("fiftysix");
const fiftyseven = document.getElementById("fiftyseven");
const fiftyeight = document.getElementById("fiftyeight");
const fiftynine = document.getElementById("fiftynine");
const sixty = document.getElementById("sixty");
const sixtyone = document.getElementById("sixtyone");
const sixtytwo = document.getElementById("sixtytwo");
const sixtythree = document.getElementById("sixtythree");
const sixtyfour = document.getElementById("sixtyfour");
const id = document.getElementById("id");

function reset(element) {
if (element.innerHTML=="Reset" || element.innerHTML=="Start") {
element.innerHTML="Select";    
one.innerHTML="♜";
two.innerHTML="♞";
three.innerHTML="♝";
four.innerHTML="♛";
five.innerHTML="♚";
six.innerHTML="♝";
seven.innerHTML="♞";
eight.innerHTML="♜"; 
nine.innerHTML="♟";
ten.innerHTML="♟";
eleven.innerHTML="♟";
twelve.innerHTML="♟";
thirteen.innerHTML="♟";
fourteen.innerHTML="♟";
fifteen.innerHTML="♟";
sixteen.innerHTML="♟"; 
seventeen.innerHTML="";
eighteen.innerHTML="";
nineteen.innerHTML="";
twenty.innerHTML="";
twentyone.innerHTML="";
twentytwo.innerHTML="";
twentythree.innerHTML="";
twentyfour.innerHTML=""; 
twentyfive.innerHTML="";
twentysix.innerHTML="";
twentyseven.innerHTML="";
twentyeight.innerHTML="";
twentynine.innerHTML="";
thirty.innerHTML="";
thirtyone.innerHTML="";
thirtytwo.innerHTML=""; 
thirtythree.innerHTML="";
thirtyfour.innerHTML="";
thirtyfive.innerHTML="";
thirtysix.innerHTML="";
thirtyseven.innerHTML="";
thirtyeight.innerHTML="";
thirtynine.innerHTML="";
fourty.innerHTML=""; 
fourtyone.innerHTML="";
fourtytwo.innerHTML="";
fourtythree.innerHTML="";
fourtyfour.innerHTML="";
fourtyfive.innerHTML="";
fourtysix.innerHTML="";
fourtyseven.innerHTML="";
fourtyeight.innerHTML=""; 
fourtynine.innerHTML="♙";
fifty.innerHTML="♙";
fiftyone.innerHTML="♙";
fiftytwo.innerHTML="♙";
fiftythree.innerHTML="♙";
fiftyfour.innerHTML="♙";
fiftyfive.innerHTML="♙";
fiftysix.innerHTML="♙"; 
fiftyseven.innerHTML="♖";
fiftyeight.innerHTML="♘";
fiftynine.innerHTML="♗";
sixty.innerHTML="♕";
sixtyone.innerHTML="♔";
sixtytwo.innerHTML="♗";
sixtythree.innerHTML="♘";
sixtyfour.innerHTML="♖";}}

function danishGambit() {  
if (id.innerHTML=="Select") {    
setTimeout(function() {
thirtyseven.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
id.innerHTML="Playing";
thirtyseven.style.background="red";}, 1000);  

setTimeout(function() {
twentynine.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentynine.style.background="red";
thirtyseven.style.background="silver";}, 2000);
    
setTimeout(function() {
thirtysix.innerHTML=fiftytwo.innerHTML;
fiftytwo.innerHTML="";
thirtysix.style.background="red";
twentynine.style.background="silver";}, 3000);   
    
setTimeout(function() {
thirtysix.innerHTML=twentynine.innerHTML;
twentynine.innerHTML="";
thirtysix.style.background="red";}, 4000);   

setTimeout(function() {
fourtythree.innerHTML=fiftyone.innerHTML;
fiftyone.innerHTML="";
fourtythree.style.background="red";
thirtysix.style.background="silver";}, 5000);
    
setTimeout(function() {
fourtythree.innerHTML=thirtysix.innerHTML;
thirtysix.innerHTML="";
fourtythree.style.background="red";}, 6000); 
    
setTimeout(function() {
thirtyfive.innerHTML=sixtytwo.innerHTML;
sixtytwo.innerHTML="";
thirtyfive.style.background="red";
fourtythree.style.background="silver";}, 7000); 
    
setTimeout(function() {
fifty.innerHTML=fourtythree.innerHTML;
fourtythree.innerHTML="";
fifty.style.background="red";
thirtyfive.style.background="silver";}, 8000);
    
setTimeout(function() {
fifty.innerHTML=fiftynine.innerHTML;
fiftynine.innerHTML="";
fifty.style.background="red";}, 9000);    

setTimeout(function() {
thirtyfour.innerHTML=six.innerHTML;
six.innerHTML="";
thirtyfour.style.background="red";
fifty.style.background="silver";}, 10000);
    
setTimeout(function() {
fourtythree.innerHTML=fiftyeight.innerHTML;
fiftyeight.innerHTML="";
fourtythree.style.background="red";
thirtyfour.style.background="silver";}, 11000);    
    
setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
fourtythree.style.background="silver";}, 12000); 
    
setTimeout(function() {
fourtytwo.innerHTML=sixty.innerHTML;
sixty.innerHTML="";
fourtytwo.style.background="red";
twentytwo.style.background="silver";}, 13000);
    
setTimeout(function() {
fourtythree.innerHTML=thirtyfour.innerHTML;
thirtyfour.innerHTML="";
fourtythree.style.background="red";
fourtytwo.style.background="silver";}, 14000); 
    
setTimeout(function() {
fourtythree.innerHTML=fourtytwo.innerHTML;
fourtytwo.innerHTML="";
fourtythree.style.background="red";}, 15000); 
    
setTimeout(function() {
seven.innerHTML=five.innerHTML;
five.innerHTML="";
six.innerHTML=eight.innerHTML;
eight.innerHTML="";    
seven.style.background="red";
six.style.background="red";    
fourtythree.style.background="silver";}, 16000);     

setTimeout(function() {
fourtysix.innerHTML=sixtythree.innerHTML;
sixtythree.innerHTML="";
fourtysix.style.background="red";
seven.style.background="silver";
six.style.background="silver";}, 17000);     
 
setTimeout(function() {
twenty.innerHTML=twelve.innerHTML;
twelve.innerHTML="";
twenty.style.background="red";
fourtysix.style.background="silver";}, 18000);    

setTimeout(function() {
sixtythree.innerHTML=sixtyone.innerHTML;
sixtyone.innerHTML="";
sixtytwo.innerHTML=sixtyfour.innerHTML;
sixtyfour.innerHTML="";    
sixtythree.style.background="red";
sixtytwo.style.background="red";    
twenty.style.background="silver";}, 19000);     
    
setTimeout(function() {
nineteen.innerHTML=two.innerHTML;
two.innerHTML="";
nineteen.style.background="red";
sixtythree.style.background="silver";
sixtytwo.style.background="silver";}, 20000); 
    
setTimeout(function() {
sixty.innerHTML=fiftyseven.innerHTML;
fiftyseven.innerHTML="";
sixty.style.background="red";
nineteen.style.background="silver";}, 21000);

setTimeout(function() {
sixty.style.background="silver";
id.innerHTML="Reset";}, 22000);}}


function danishGambitTwo() {        
if (id.innerHTML=="Select") {   
setTimeout(function() {
thirtyseven.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
id.innerHTML="Playing";    
thirtyseven.style.background="red";}, 1000);  

setTimeout(function() {
twentynine.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentynine.style.background="red";
thirtyseven.style.background="silver";}, 2000);
    
setTimeout(function() {
thirtysix.innerHTML=fiftytwo.innerHTML;
fiftytwo.innerHTML="";
thirtysix.style.background="red";
twentynine.style.background="silver";}, 3000);   
    
setTimeout(function() {
thirtysix.innerHTML=twentynine.innerHTML;
twentynine.innerHTML="";
thirtysix.style.background="red";}, 4000);   

setTimeout(function() {
fourtythree.innerHTML=fiftyone.innerHTML;
fiftyone.innerHTML="";
fourtythree.style.background="red";
thirtysix.style.background="silver";}, 5000);
    
setTimeout(function() {
fourtythree.innerHTML=thirtysix.innerHTML;
thirtysix.innerHTML="";
fourtythree.style.background="red";}, 6000); 
    
setTimeout(function() {
thirtyfive.innerHTML=sixtytwo.innerHTML;
sixtytwo.innerHTML="";
thirtyfive.style.background="red";
fourtythree.style.background="silver";}, 7000); 
    
setTimeout(function() {
fifty.innerHTML=fourtythree.innerHTML;
fourtythree.innerHTML="";
fifty.style.background="red";
thirtyfive.style.background="silver";}, 8000);
    
setTimeout(function() {
fifty.innerHTML=fiftynine.innerHTML;
fiftynine.innerHTML="";
fifty.style.background="red";}, 9000);

setTimeout(function() {
twentyeight.innerHTML=twelve.innerHTML;
twelve.innerHTML="";
twentyeight.style.background="red";
fifty.style.background="silver";}, 10000);

setTimeout(function() {
twentyeight.innerHTML=thirtyfive.innerHTML;
thirtyfive.innerHTML="";
twentyeight.style.background="red";}, 11000);

setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
twentyeight.style.background="silver";}, 12000);
    
setTimeout(function() {
fourteen.innerHTML=twentyeight.innerHTML;
twentyeight.innerHTML="";
fourteen.style.background="red";
twentytwo.style.background="silver";}, 13000);
    
setTimeout(function() {
fourteen.innerHTML=five.innerHTML;
five.innerHTML="";
fourteen.style.background="red";}, 14000);    
    
setTimeout(function() {
four.innerHTML=sixty.innerHTML;
sixty.innerHTML="";
four.style.background="red";
fourteen.style.background="silver";}, 15000);
    
setTimeout(function() {
thirtyfour.innerHTML=six.innerHTML;
six.innerHTML="";
thirtyfour.style.background="red";
four.style.background="silver";}, 16000);   
    
setTimeout(function() {
fiftytwo.innerHTML=four.innerHTML;
four.innerHTML="";
fiftytwo.style.background="red";
thirtyfour.style.background="silver";}, 17000);    

setTimeout(function() {
fiftytwo.innerHTML=thirtyfour.innerHTML;
thirtyfour.innerHTML="";
fiftytwo.style.background="red";}, 18000);

setTimeout(function() {
fiftytwo.innerHTML=sixtyone.innerHTML;
sixtyone.innerHTML="";
fiftytwo.style.background="red";}, 19000); 
    
setTimeout(function() {
nineteen.innerHTML=two.innerHTML;
two.innerHTML="";
nineteen.style.background="red";
fiftytwo.style.background="silver";}, 20000);    
    
setTimeout(function() {
fourtysix.innerHTML=sixtythree.innerHTML;
sixtythree.innerHTML="";
fourtysix.style.background="red";
nineteen.style.background="silver";}, 21000);

setTimeout(function() {
fourtysix.style.background="silver";
id.innerHTML="Reset";}, 22000);}} 

function danishGambitThree() {        
if (id.innerHTML=="Select") {   
setTimeout(function() {
thirtyseven.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
id.innerHTML="Playing";    
thirtyseven.style.background="red";}, 1000);  

setTimeout(function() {
twentynine.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentynine.style.background="red";
thirtyseven.style.background="silver";}, 2000);
    
setTimeout(function() {
thirtysix.innerHTML=fiftytwo.innerHTML;
fiftytwo.innerHTML="";
thirtysix.style.background="red";
twentynine.style.background="silver";}, 3000);   
    
setTimeout(function() {
thirtysix.innerHTML=twentynine.innerHTML;
twentynine.innerHTML="";
thirtysix.style.background="red";}, 4000);   

setTimeout(function() {
fourtythree.innerHTML=fiftyone.innerHTML;
fiftyone.innerHTML="";
fourtythree.style.background="red";
thirtysix.style.background="silver";}, 5000);
    
setTimeout(function() {
fourtythree.innerHTML=thirtysix.innerHTML;
thirtysix.innerHTML="";
fourtythree.style.background="red";}, 6000); 
    
setTimeout(function() {
thirtyfive.innerHTML=sixtytwo.innerHTML;
sixtytwo.innerHTML="";
thirtyfive.style.background="red";
fourtythree.style.background="silver";}, 7000); 
    
setTimeout(function() {
fifty.innerHTML=fourtythree.innerHTML;
fourtythree.innerHTML="";
fifty.style.background="red";
thirtyfive.style.background="silver";}, 8000);
    
setTimeout(function() {
fifty.innerHTML=fiftynine.innerHTML;
fiftynine.innerHTML="";
fifty.style.background="red";}, 9000);

setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
fifty.style.background="silver";}, 10000);

setTimeout(function() {
twentynine.innerHTML=thirtyseven.innerHTML;
thirtyseven.innerHTML="";
twentynine.style.background="red";
twentytwo.style.background="silver";}, 11000);

setTimeout(function() {
thirtyseven.innerHTML=twentytwo.innerHTML;
twentytwo.innerHTML="";
thirtyseven.style.background="red";
twentynine.style.background="silver";}, 12000);

setTimeout(function() {
fourteen.innerHTML=thirtyfive.innerHTML;
thirtyfive.innerHTML="";
fourteen.style.background="red";
thirtyseven.style.background="silver";}, 13000);

setTimeout(function() {
fourteen.innerHTML=five.innerHTML;
five.innerHTML="";
fourteen.style.background="red";}, 14000);

setTimeout(function() {
fourtysix.innerHTML=sixty.innerHTML;
sixty.innerHTML="";
fourtysix.style.background="red";
fourteen.style.background="silver";}, 15000);
    
setTimeout(function() {
five.innerHTML=fourteen.innerHTML;
fourteen.innerHTML="";
five.style.background="red";
fourtysix.style.background="silver";}, 16000); 
    
setTimeout(function() {
thirtyseven.innerHTML=fourtysix.innerHTML;
fourtysix.innerHTML="";
thirtyseven.style.background="red";
five.style.background="silver";}, 17000); 
    
setTimeout(function() {
thirtyseven.style.background="silver";
id.innerHTML="Reset";}, 18000);}} 

function danishGambitFour() {
if (id.innerHTML=="Select") {       
setTimeout(function() {
thirtyseven.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
id.innerHTML="Playing";    
thirtyseven.style.background="red";}, 1000);  

setTimeout(function() {
twentynine.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentynine.style.background="red";
thirtyseven.style.background="silver";}, 2000);
    
setTimeout(function() {
thirtysix.innerHTML=fiftytwo.innerHTML;
fiftytwo.innerHTML="";
thirtysix.style.background="red";
twentynine.style.background="silver";}, 3000);   
    
setTimeout(function() {
thirtysix.innerHTML=twentynine.innerHTML;
twentynine.innerHTML="";
thirtysix.style.background="red";}, 4000);   

setTimeout(function() {
fourtythree.innerHTML=fiftyone.innerHTML;
fiftyone.innerHTML="";
fourtythree.style.background="red";
thirtysix.style.background="silver";}, 5000);
    
setTimeout(function() {
fourtythree.innerHTML=thirtysix.innerHTML;
thirtysix.innerHTML="";
fourtythree.style.background="red";}, 6000); 
    
setTimeout(function() {
thirtyfive.innerHTML=sixtytwo.innerHTML;
sixtytwo.innerHTML="";
thirtyfive.style.background="red";
fourtythree.style.background="silver";}, 7000); 
    
setTimeout(function() {
fifty.innerHTML=fourtythree.innerHTML;
fourtythree.innerHTML="";
fifty.style.background="red";
thirtyfive.style.background="silver";}, 8000);
    
setTimeout(function() {
fifty.innerHTML=fiftynine.innerHTML;
fiftynine.innerHTML="";
fifty.style.background="red";}, 9000);

setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
fifty.style.background="silver";}, 10000);

setTimeout(function() {
twentynine.innerHTML=thirtyseven.innerHTML;
thirtyseven.innerHTML="";
twentynine.style.background="red";
twentytwo.style.background="silver";}, 11000);

setTimeout(function() {
thirtyfour.innerHTML=six.innerHTML;
six.innerHTML="";
thirtyfour.style.background="red";
twentynine.style.background="silver";}, 12000);

setTimeout(function() {
fourtythree.innerHTML=fifty.innerHTML;
fifty.innerHTML="";
fourtythree.style.background="red";
thirtyfour.style.background="silver";}, 13000);

setTimeout(function() {
fourtythree.innerHTML=thirtyfour.innerHTML;
thirtyfour.innerHTML="";
fourtythree.style.background="red";}, 14000);

setTimeout(function() {
fourtythree.innerHTML=fiftyeight.innerHTML;
fiftyeight.innerHTML="";
fourtythree.style.background="red";}, 15000);

setTimeout(function() {
thirteen.innerHTML=four.innerHTML;
four.innerHTML="";
thirteen.style.background="red";
fourtythree.style.background="silver";}, 16000);

setTimeout(function() {
fiftythree.innerHTML=sixty.innerHTML;
sixty.innerHTML="";
fiftythree.style.background="red";
thirteen.style.background="silver";}, 17000);

setTimeout(function() {
seven.innerHTML=twentytwo.innerHTML;
twentytwo.innerHTML="";
seven.style.background="red";
fiftythree.style.background="silver";}, 18000);

setTimeout(function() {
fourtysix.innerHTML=sixtythree.innerHTML;
sixtythree.innerHTML="";
fourtysix.style.background="red";
seven.style.background="silver";}, 19000);

setTimeout(function() {
fourtysix.style.background="silver";
id.innerHTML="Reset";}, 20000);}} 

function danishGambitFive() {    
if (id.innerHTML=="Select") {       
setTimeout(function() {
thirtyseven.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
id.innerHTML="Playing";    
thirtyseven.style.background="red";}, 1000);  

setTimeout(function() {
twentynine.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentynine.style.background="red";
thirtyseven.style.background="silver";}, 2000);
    
setTimeout(function() {
thirtysix.innerHTML=fiftytwo.innerHTML;
fiftytwo.innerHTML="";
thirtysix.style.background="red";
twentynine.style.background="silver";}, 3000);   
    
setTimeout(function() {
thirtysix.innerHTML=twentynine.innerHTML;
twentynine.innerHTML="";
thirtysix.style.background="red";}, 4000);   

setTimeout(function() {
fourtythree.innerHTML=fiftyone.innerHTML;
fiftyone.innerHTML="";
fourtythree.style.background="red";
thirtysix.style.background="silver";}, 5000);
    
setTimeout(function() {
fourtythree.innerHTML=thirtysix.innerHTML;
thirtysix.innerHTML="";
fourtythree.style.background="red";}, 6000); 
    
setTimeout(function() {
thirtyfive.innerHTML=sixtytwo.innerHTML;
sixtytwo.innerHTML="";
thirtyfive.style.background="red";
fourtythree.style.background="silver";}, 7000); 
    
setTimeout(function() {
fifty.innerHTML=fourtythree.innerHTML;
fourtythree.innerHTML="";
fifty.style.background="red";
thirtyfive.style.background="silver";}, 8000);
    
setTimeout(function() {
fifty.innerHTML=fiftynine.innerHTML;
fiftynine.innerHTML="";
fifty.style.background="red";}, 9000);

setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
fifty.style.background="silver";}, 10000);

setTimeout(function() {
twentynine.innerHTML=thirtyseven.innerHTML;
thirtyseven.innerHTML="";
twentynine.style.background="red";
twentytwo.style.background="silver";}, 11000);

setTimeout(function() {
thirteen.innerHTML=four.innerHTML;
four.innerHTML="";
thirteen.style.background="red";
twentynine.style.background="silver";}, 12000);

setTimeout(function() {
fiftythree.innerHTML=sixty.innerHTML;
sixty.innerHTML="";
fiftythree.style.background="red";
thirteen.style.background="silver";}, 13000);

setTimeout(function() {
seven.innerHTML=twentytwo.innerHTML;
twentytwo.innerHTML="";
seven.style.background="red";
fiftythree.style.background="silver";}, 14000);

setTimeout(function() {
fourtythree.innerHTML=fiftyeight.innerHTML;
fiftyeight.innerHTML="";
fourtythree.style.background="red";
seven.style.background="silver";}, 15000);

setTimeout(function() {
fourtythree.style.background="silver";
id.innerHTML="Reset";}, 16000);}}

function queensGambitOne() {    
if (id.innerHTML=="Select") {       
setTimeout(function() {
thirtysix.innerHTML=fiftytwo.innerHTML;
fiftytwo.innerHTML="";
id.innerHTML="Playing";    
thirtysix.style.background="red";}, 1000);

setTimeout(function() {
twentyeight.innerHTML=twelve.innerHTML;
twelve.innerHTML="";
twentyeight.style.background="red";
thirtysix.style.background="silver";}, 2000);
    
setTimeout(function() {
thirtyfive.innerHTML=fiftyone.innerHTML;
fiftyone.innerHTML="";
thirtyfive.style.background="red";
twentyeight.style.background="silver";}, 3000);    

setTimeout(function() {
thirtyfive.innerHTML=twentyeight.innerHTML;
twentyeight.innerHTML="";
thirtyfive.style.background="red";}, 4000); 

setTimeout(function() {
fourtyfive.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
fourtyfive.style.background="red";
thirtyfive.style.background="silver";}, 5000);     
    
setTimeout(function() {
twentysix.innerHTML=ten.innerHTML;
ten.innerHTML="";
twentysix.style.background="red";
fourtyfive.style.background="silver";}, 6000); 
    
setTimeout(function() {
thirtythree.innerHTML=fourtynine.innerHTML;
fourtynine.innerHTML="";
thirtythree.style.background="red";
twentysix.style.background="silver";}, 7000);     
    
setTimeout(function() {
nineteen.innerHTML=eleven.innerHTML;
eleven.innerHTML="";
nineteen.style.background="red";
thirtythree.style.background="silver";}, 8000); 
    
setTimeout(function() {
twentysix.innerHTML=thirtythree.innerHTML;
thirtythree.innerHTML="";
twentysix.style.background="red";
nineteen.style.background="silver";}, 9000); 
    
setTimeout(function() {
twentysix.innerHTML=nineteen.innerHTML;
nineteen.innerHTML="";
twentysix.style.background="red";}, 10000);  
    
setTimeout(function() {
fourtysix.innerHTML=sixty.innerHTML;
sixty.innerHTML="";
fourtysix.style.background="red";
twentysix.style.background="silver";}, 11000);

setTimeout(function() {
fourtysix.style.background="silver";
id.innerHTML="Reset";}, 12000);}} 

function queensGambitTwo() {    
if (id.innerHTML=="Select") {       
setTimeout(function() {
thirtysix.innerHTML=fiftytwo.innerHTML;
fiftytwo.innerHTML="";
id.innerHTML="Playing";    
thirtysix.style.background="red";}, 1000);

setTimeout(function() {
twentyeight.innerHTML=twelve.innerHTML;
twelve.innerHTML="";
twentyeight.style.background="red";
thirtysix.style.background="silver";}, 2000);
    
setTimeout(function() {
thirtyfive.innerHTML=fiftyone.innerHTML;
fiftyone.innerHTML="";
thirtyfive.style.background="red";
twentyeight.style.background="silver";}, 3000);

setTimeout(function() {
twentyone.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentyone.style.background="red";
thirtyfive.style.background="silver";}, 4000);

setTimeout(function() {
fourtythree.innerHTML=fiftyeight.innerHTML;
fiftyeight.innerHTML="";
fourtythree.style.background="red";
twentyone.style.background="silver";}, 5000);

setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
fourtythree.style.background="silver";}, 6000);
    
setTimeout(function() {
thirtyone.innerHTML=fiftynine.innerHTML;
fiftynine.innerHTML="";
thirtyone.style.background="red";
twentytwo.style.background="silver";}, 7000);    
    
setTimeout(function() {
thirteen.innerHTML=six.innerHTML;
six.innerHTML="";
thirteen.style.background="red";
thirtyone.style.background="silver";}, 8000);     
    
setTimeout(function() {
fourtyfive.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
fourtyfive.style.background="red";
thirteen.style.background="silver";}, 9000);
    
setTimeout(function() {
six.innerHTML=eight.innerHTML;
eight.innerHTML="";
seven.innerHTML=five.innerHTML;
five.innerHTML="";    
six.style.background="red";
seven.style.background="red";    
fourtyfive.style.background="silver";}, 10000);    

setTimeout(function() {
fourtysix.innerHTML=sixtythree.innerHTML;
sixtythree.innerHTML="";
fourtysix.style.background="red";
six.style.background="silver";
seven.style.background="silver";}, 11000);

setTimeout(function() {
fourtysix.style.background="silver";
id.innerHTML="Reset";}, 12000);}}  

function queensGambitThree() {    
if (id.innerHTML=="Select") {       
setTimeout(function() {
thirtysix.innerHTML=fiftytwo.innerHTML;
fiftytwo.innerHTML="";
id.innerHTML="Playing";    
thirtysix.style.background="red";}, 1000);

setTimeout(function() {
twentyeight.innerHTML=twelve.innerHTML;
twelve.innerHTML="";
twentyeight.style.background="red";
thirtysix.style.background="silver";}, 2000);
    
setTimeout(function() {
thirtyfive.innerHTML=fiftyone.innerHTML;
fiftyone.innerHTML="";
thirtyfive.style.background="red";
twentyeight.style.background="silver";}, 3000);    

setTimeout(function() {
thirtyfive.innerHTML=twentyeight.innerHTML;
twentyeight.innerHTML="";
thirtyfive.style.background="red";}, 4000);

setTimeout(function() {
fourtyfive.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
fourtyfive.style.background="red";
thirtyfive.style.background="silver";}, 5000);    
    
setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
fourtyfive.style.background="silver";}, 6000); 

setTimeout(function() {
thirtyfive.innerHTML=sixtytwo.innerHTML;
sixtytwo.innerHTML="";
thirtyfive.style.background="red";
twentytwo.style.background="silver";}, 7000);

setTimeout(function() {
twentyone.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentyone.style.background="red";
thirtyfive.style.background="silver";}, 8000);

setTimeout(function() {
fourtysix.innerHTML=sixtythree.innerHTML;
sixtythree.innerHTML="";
fourtysix.style.background="red";
twentyone.style.background="silver";}, 9000);    
 
setTimeout(function() {
thirteen.innerHTML=six.innerHTML;
six.innerHTML="";
thirteen.style.background="red";
fourtysix.style.background="silver";}, 10000);    

setTimeout(function() {
sixtythree.innerHTML=sixtyone.innerHTML;
sixtyone.innerHTML="";
sixtytwo.innerHTML=sixtyfour.innerHTML;
sixtyfour.innerHTML="";    
sixtytwo.style.background="red";
sixtythree.style.background="red";    
thirteen.style.background="silver";}, 11000);    

setTimeout(function() {
six.innerHTML=eight.innerHTML;
eight.innerHTML="";
seven.innerHTML=five.innerHTML;
five.innerHTML="";    
six.style.background="red";
seven.style.background="red";    
sixtytwo.style.background="silver";
sixtythree.style.background="silver";}, 12000);

setTimeout(function() {
seven.style.background="silver";
six.style.background="silver";    
id.innerHTML="Reset";}, 13000);}} 

function kingsGambitOne() {        
if (id.innerHTML=="Select") {   
setTimeout(function() {
thirtyseven.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
id.innerHTML="Playing";    
thirtyseven.style.background="red";}, 1000);  

setTimeout(function() {
twentynine.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentynine.style.background="red";
thirtyseven.style.background="silver";}, 2000);

setTimeout(function() {
thirtyeight.innerHTML=fiftyfour.innerHTML;
fiftyfour.innerHTML="";
thirtyeight.style.background="red";
twentynine.style.background="silver";}, 3000);    

setTimeout(function() {
thirtyeight.innerHTML=twentynine.innerHTML;
twentynine.innerHTML="";
thirtyeight.style.background="red";}, 4000);

setTimeout(function() {
fourtysix.innerHTML=sixtythree.innerHTML;
sixtythree.innerHTML="";
fourtysix.style.background="red";
thirtyeight.style.background="silver";}, 5000); 

setTimeout(function() {
thirtyone.innerHTML=fifteen.innerHTML;
fifteen.innerHTML="";
thirtyone.style.background="red";
fourtysix.style.background="silver";}, 6000);
    
setTimeout(function() {
fourty.innerHTML=fiftysix.innerHTML;
fiftysix.innerHTML="";
fourty.style.background="red";
thirtyone.style.background="silver";}, 7000);    
    
setTimeout(function() {
twentytwo.innerHTML=fourteen.innerHTML;
fourteen.innerHTML="";
twentytwo.style.background="red";
fourty.style.background="silver";}, 8000);    
    
setTimeout(function() {
thirtyone.innerHTML=fourtysix.innerHTML;
fourtysix.innerHTML="";
thirtyone.style.background="red";
twentytwo.style.background="silver";}, 9000);     

setTimeout(function() {
thirtyone.innerHTML=twentytwo.innerHTML;
twentytwo.innerHTML="";
thirtyone.style.background="red";}, 10000);     
    
setTimeout(function() {
thirtytwo.innerHTML=sixty.innerHTML;
sixty.innerHTML="";
thirtytwo.style.background="red";
thirtyone.style.background="silver";}, 11000);    
    
setTimeout(function() {
thirteen.innerHTML=five.innerHTML;
five.innerHTML="";
thirteen.style.background="red";
thirtytwo.style.background="silver";}, 12000); 
    
setTimeout(function() {
thirtyone.innerHTML=thirtytwo.innerHTML;
thirtytwo.innerHTML="";
thirtyone.style.background="red";
thirteen.style.background="silver";}, 13000);    

setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
thirtyone.style.background="silver";}, 14000);      
    
setTimeout(function() {
twentynine.innerHTML=thirtyseven.innerHTML;
thirtyseven.innerHTML="";
twentynine.style.background="red";
twentytwo.style.background="silver";}, 15000); 
    
setTimeout(function() {
twentynine.style.background="silver";    
id.innerHTML="Reset";}, 16000);}}

function kingsGambitTwo() {        
if (id.innerHTML=="Select") {   
setTimeout(function() {
thirtyseven.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
id.innerHTML="Playing";    
thirtyseven.style.background="red";}, 1000);  

setTimeout(function() {
twentynine.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentynine.style.background="red";
thirtyseven.style.background="silver";}, 2000);

setTimeout(function() {
thirtyeight.innerHTML=fiftyfour.innerHTML;
fiftyfour.innerHTML="";
thirtyeight.style.background="red";
twentynine.style.background="silver";}, 3000);    

setTimeout(function() {
thirtyeight.innerHTML=twentynine.innerHTML;
twentynine.innerHTML="";
thirtyeight.style.background="red";}, 4000);

setTimeout(function() {
fourtysix.innerHTML=sixtythree.innerHTML;
sixtythree.innerHTML="";
fourtysix.style.background="red";
thirtyeight.style.background="silver";}, 5000); 

setTimeout(function() {
thirtyone.innerHTML=fifteen.innerHTML;
fifteen.innerHTML="";
thirtyone.style.background="red";
fourtysix.style.background="silver";}, 6000);
    
setTimeout(function() {
fourty.innerHTML=fiftysix.innerHTML;
fiftysix.innerHTML="";
fourty.style.background="red";
thirtyone.style.background="silver";}, 7000);    
    
setTimeout(function() {
thirtynine.innerHTML=thirtyone.innerHTML;
thirtyone.innerHTML="";
thirtynine.style.background="red";
fourty.style.background="silver";}, 8000);    
    
setTimeout(function() {
twentynine.innerHTML=fourtysix.innerHTML;
fourtysix.innerHTML="";
twentynine.style.background="red";
thirtynine.style.background="silver";}, 9000);    

setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
twentynine.style.background="silver";}, 10000);    
    
setTimeout(function() {
thirtyfive.innerHTML=sixtytwo.innerHTML;
sixtytwo.innerHTML="";
thirtyfive.style.background="red";
twentytwo.style.background="silver";}, 11000);    
    
setTimeout(function() {
thirtyfive.style.background="silver";    
id.innerHTML="Reset";}, 12000);}}

function kingsGambitThree() {        
if (id.innerHTML=="Select") {   
setTimeout(function() {
thirtyseven.innerHTML=fiftythree.innerHTML;
fiftythree.innerHTML="";
id.innerHTML="Playing";    
thirtyseven.style.background="red";}, 1000);  

setTimeout(function() {
twentynine.innerHTML=thirteen.innerHTML;
thirteen.innerHTML="";
twentynine.style.background="red";
thirtyseven.style.background="silver";}, 2000);

setTimeout(function() {
thirtyeight.innerHTML=fiftyfour.innerHTML;
fiftyfour.innerHTML="";
thirtyeight.style.background="red";
twentynine.style.background="silver";}, 3000);

setTimeout(function() {
twentyeight.innerHTML=twelve.innerHTML;
twelve.innerHTML="";
twentyeight.style.background="red";
thirtyeight.style.background="silver";}, 4000);

setTimeout(function() {
twentyeight.innerHTML=thirtyseven.innerHTML;
thirtyseven.innerHTML="";
twentyeight.style.background="red";}, 5000);

setTimeout(function() {
thirtyseven.innerHTML=twentynine.innerHTML;
twentynine.innerHTML="";
thirtyseven.style.background="red";
twentyeight.style.background="silver";}, 6000);

setTimeout(function() {
fourtyfour.innerHTML=fiftytwo.innerHTML;
fiftytwo.innerHTML="";
fourtyfour.style.background="red";
thirtyseven.style.background="silver";}, 7000);

setTimeout(function() {
twentytwo.innerHTML=seven.innerHTML;
seven.innerHTML="";
twentytwo.style.background="red";
fourtyfour.style.background="silver";}, 8000);    
 
setTimeout(function() {
thirtyseven.innerHTML=fourtyfour.innerHTML;
fourtyfour.innerHTML="";
thirtyseven.style.background="red";
twentytwo.style.background="silver";}, 9000);    
    
setTimeout(function() {
thirtyseven.innerHTML=twentytwo.innerHTML;
twentytwo.innerHTML="";
thirtyseven.style.background="red";}, 10000);    
    
setTimeout(function() {
fourtysix.innerHTML=sixtythree.innerHTML;
sixtythree.innerHTML="";
fourtysix.style.background="red";
thirtyseven.style.background="silver";}, 11000);    
    
setTimeout(function() {
twentyseven.innerHTML=six.innerHTML;
six.innerHTML="";
twentyseven.style.background="red";
fourtysix.style.background="silver";}, 12000);     
    
setTimeout(function() {
fiftythree.innerHTML=sixty.innerHTML;
sixty.innerHTML="";
fiftythree.style.background="red";
twentyseven.style.background="silver";}, 13000);    
 
setTimeout(function() {
thirty.innerHTML=three.innerHTML;
three.innerHTML="";
thirty.style.background="red";
fiftythree.style.background="silver";}, 14000);    
    
setTimeout(function() {
thirty.style.background="silver";    
id.innerHTML="Reset";}, 15000);}} 
