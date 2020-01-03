function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  let s = 50;
  // for (var i = 0; i < windowWidth; i+=s) {
  //   for (var j = 0; j < windowHeight; j+=s) {
  //     fill(((i/windowWidth+j/windowHeight)*255/2+random()*255)/2);
  //     rect(i,j,s,s);
  //   }
  // }
}

function draw() {

}

function visarr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; i++) {
      rect(i,j,s,s);
    }
  }
}

function towdigits(str){if((str+"").length<2){return"0"+str}return str}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
