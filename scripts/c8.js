let information = {
  Contributor: "Toeffe3",
  Name: "Numerial system clock",
  Decription: "The minutes and seconds are encoded in the numerial system equvilent to the hour + 1 (Midnight (0) is 24)."
};

function setup(){createCanvas(windowWidth,windowHeight);windowResized();}
function draw() {
  background(255);
  stroke(0);
  strokeWeight(0)
  let h = (hour()==0?24:hour())+1
  let number = hour();
  textSize(50);
  text("BASE "+h,width/2 - 150, height/2 - 100);
  textSize(100);
  text((digits(minute().toString(h),2)+digits(second().toString(h),2)).split("").join(" "), width/2 - 150, height/2 - 15);
  strokeWeight(3)
  line(width/2 - 150, height/2, width/2 + 150, height/2);
}
function digits(str,amo){if((str+"").length<amo){return"0"+str}return str}
function windowResized(){resizeCanvas(windowWidth,windowHeight);}
