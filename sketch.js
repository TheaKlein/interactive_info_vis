//custom variables for y-coordinate of sun & horizon
let shapeHeight;

let designWidth = 400;
let designHeight= 400;
let horizon ;
function setup() {
  createCanvas(designWidth,designHeight); //windowWidth, windowHeight
  horizon =height/2;
}

function draw() {

  //shape follows y-coordinate of mouse
  shapeHeight = mouseY;
  currentWidth = mouseX;

  //light blue background if the shape is above horizon

  //with if-else statement
  if (shapeHeight < horizon) {
    background("lightblue"); // blue if above horizon
    
  } else {
    background("grey"); // grey if below horizon
  }

  //sun
  stroke("orange");
  strokeWeight(5);
  fill("yellow");
  circle(width / 2, shapeHeight / 2, 100);


  textSize(20);
  fill("black");
  text('Hi! My name is Thea', currentWidth/2, shapeHeight/2);
  

  // draw line for horizon
  stroke('darkgreen');
  line(0,horizon,width,horizon);

  //grass

  fill("lightgreen");
  rect(0, horizon, width, height);

  textSize(25)
  text("🌸", 100, 250) 
  text("🌸", 50, 300)
  text("🌸", 150, 275)
  text("🌸", 200, 330)
  text("🌸", 250, 230)
  text("🌸", 300, 310)

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  horizon = height / 2; // recalc horizon after resize
}

