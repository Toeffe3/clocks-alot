let information = {
  Contributor: "Toeffe3",
  Name: "Upside-down analog",
  Decription: "You might be confused by this reversed fliped upside-down analog clock."
};
let ss;
function setup(){
  createCanvas(windowWidth,windowHeight);
  windowResized();
  ss = second()*1000;
}
function draw() {
  translate(width/2, height/2);
  // rotate(PI);
  if(hour()<20 && hour()>=8) {
    background(0);
    stroke(255);
  } else {
    background(255);
    stroke(0);
  }
  strokeWeight(10);
  line(0, 0, sin(minute()/30*PI)*250, cos(minute()/30*PI)*250);
  line(0, 0, sin((hour())/6*PI)*175, cos((hour())/6*PI)*175);
  strokeWeight(4);
  stroke(255,0,0);
  line(0, 0, sin((ss+millis())/30000*PI)*250, cos((ss+millis())/30000*PI)*250);
}

function windowResized(){resizeCanvas(windowWidth,windowHeight);}
