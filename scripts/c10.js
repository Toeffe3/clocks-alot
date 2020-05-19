let information = {
  Contributor: "Toeffe3",
  Name: "Hex",
  Decription: "Each fragment is in hex"
};

function setup(){createCanvas(windowWidth,windowHeight);windowResized();}
function draw() {
  background(255);
  strokeWeight(1);
  stroke(0);
  textSize(50);
  textAlign(CENTER);
  let t = decToPadHex(hour())+"\n"+decToPadHex(minute())+"\n"+decToPadHex(second());
  text(t, width/2, height/2);
}
const decToPadHex = (val, n=2) => {
  return "0x"+("0"+val.toString(16)).split("").slice(-n).join("");
}
function windowResized(){resizeCanvas(windowWidth,windowHeight);}
