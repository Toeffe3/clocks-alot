function setup(){createCanvas(windowWidth,windowHeight)}

function draw(){
  let r = (hour()/24)*255,
      g = (minute()/60)*255,
      b = (second()/60)*255;
  background(r,g,b);
  fill(255);
  str = "R: "+floor(r)+", G: "+floor(g)+", B: "+floor(b);
  text(str, windowWidth/2 - 200, windowHeight/2);
}



function towdigits(str){if((str+"").length<2){return"0"+str}return str}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
