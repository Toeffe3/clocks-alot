let s=0;
function setup(){createCanvas(windowWidth,windowHeight);textSize(40)}
function draw(){if(second()!=s){background(255);text(towdigits(hour())+":"+towdigits(minute())+":"+towdigits(second()),random(40,windowWidth-160),random(40,windowHeight-160));s=second()}}
function towdigits(str){if((str+"").length<2){return"0"+str}return str}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
