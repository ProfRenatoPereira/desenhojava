function setup() {
  createCanvas(1440, 600);
  background("black");
}


function draw() {
  stroke("blue");
  fill("red");


if(mouseIsPressed){
  rect(mouseX, mouseY, 20, 35);
}
}
