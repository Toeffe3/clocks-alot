let information = {
  Contributor: "Toeffe3",
  Name: "RGB-Clock",
  Decription: "Time is converted to values between 0 and 255 to simulate the RGB-spectrum"
};

function setup(){createCanvas(windowWidth,windowHeight)}
function draw(){
  let r = (hour()/24)*255, g = (minute()/60)*255, b = (second()/60)*255;
  background(r,g,b); fill(255);
  str = "R: "+floor(r)+", G: "+floor(g)+", B: "+floor(b);
  text(str,40,40);
}
function towdigits(str){if((str+"").length<2){return"0"+str}return str}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
