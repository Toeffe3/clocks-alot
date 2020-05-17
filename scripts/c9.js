let information = {
  Contributor: "Toeffe3",
  Name: "Binary",
  Decription: "Each fragment is in binary"
};

function setup(){createCanvas(windowWidth,windowHeight);windowResized();}
function draw() {
  background(255);
  strokeWeight(1);
  stroke(0);
  let h = (height-200) / 4;
  displayDots(hour(),  h  +100, 6, 5);
  displayDots(minute(),h*2+100);
  displayDots(second(),h*3+100);
}

function displayDots(fragment, height, amount=6, limit=amount) {
  const src = 1/(amount-1) * (width-400);
  const l = amount-limit;
  fragment = "000000"+fragment.toString(2);
  while(amount-->l) {
    if(fragment[fragment.length-1-amount] == "1") fill(0);
    else fill(255);
    ellipse(200 + amount*src, height, 25, 25, 0);
  }
}

function windowResized(){resizeCanvas(windowWidth,windowHeight);}
