let information = {
  Contributor: "Toeffe3",
  Name: "Analog",
  Decription: "The time displayed as on an analog watch."
};
let ss;
function setup(){
  createCanvas(windowWidth,windowHeight);
  windowResized();
  ss = second()*1000;
}
function draw() {
  translate(width/2, height/2);
  rotate(3/4*2*PI);
  if(hour()<20 && hour()>=8) {
    background(255);
    stroke(0);
  } else {
    background(0);
    stroke(255);
  }
  strokeWeight(10);
  line(0, 0, cos(minute()/30*PI)*250, sin(minute()/30*PI)*250);
  line(0, 0, cos((hour())/6*PI)*175, sin((hour())/6*PI)*175);
  strokeWeight(4);
  stroke(255,0,0);
  line(0, 0, cos((ss+millis())/30000*PI)*250, sin((ss+millis())/30000*PI)*250);
}

function windowResized(){resizeCanvas(windowWidth,windowHeight);}
