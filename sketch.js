var luna=250;
var luz=120;
var jim=120;
//The setup function only happens once
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
  background(25,84,41);
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  strokeWeight(4)
  stroke(24,26,24); // an RGB color for the circle's border
  fill(76,random(0,255),39,230); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  
  ellipse(20,random(height),30,30); // center of canvas, 20px dia
ellipse(random (width),20,30,30);
ellipse(470,random(height),30,30);
ellipse (random(width), 490,30,30);
fill(184,121,13,mouseY);
ellipse(184,luna,30,1);
ellipse(400,luna,50,1);
ellipse(250,luna,20,1);
ellipse(luz,jim,20,60);
textFont("Garamond");
textSize(40);
text('Nothing is what you think', 30,220);
strokeWeight(0);
ellipse(mouseX,mouseY,50,1);

}


function mousePressed() {
  if (luna>=255) {
    luna=250
  }else{
    luna-luna-7;
  }
  luna=luna-7; 
 
 luz= random(250,50);
 jim= random (90,30); 

 } // body...

