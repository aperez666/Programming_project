var diaml = 300;
var move1 = 100;
var move2 = 100;
var move3 = 40;
var move4 = 60;
function setup() {
  // put setup code here
 createCanvas(500,500);  
}

function draw() {
  // put drawing code here
    background("#000336");
    fill("#add8e6");
    stroke("#ffff00");
    strokeWeight(5);
    ellipse(move1,move2,diaml,diaml);
    stroke("#ff0000");
    ellipse(move3,move4,diaml,diaml);
}

function mousePressed(){
diaml=diaml+5; 
move1=move1+5;  
move2=move2+5;  
move3=move3+50;  
move4=move4+50;
}