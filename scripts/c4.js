function setup(){createCanvas(windowWidth,windowHeight);}

function draw() {
  background(0,15);
  textSize(80);
  fill(255);
  text(towdigits(hour()),windowWidth/4-40,hour()/25*windowHeight+70);
  text(":",windowWidth/3+20,windowHeight/2);
  text(towdigits(minute()),windowWidth/4*2-40,minute()/64*windowHeight+70);
  text(":",windowWidth/3*2-20,windowHeight/2);
  text(towdigits(second()),windowWidth/4*3-40,second()/64*windowHeight+70);
}

function towdigits(str){if((str+"").length<2){return"0"+str}return str}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
