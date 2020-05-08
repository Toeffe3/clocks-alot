let information = {
  Contributor: "Toeffe3",
  Name: "Seven-segment display",
  Decription: "Time displayed on 4 seven segment displays"
};

class Segment {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.dot = 0;
    this.number = undefined;
    this.offset = [
      [140,240,140,240],
      [20,0,100,0],
      [120,20,120,100],
      [120,140,120,220],
      [20,240,100,240],
      [0,140,0,220],
      [0,20,0,100],
      [20,120,100,120],
    ]
  }

  display() {
    strokeWeight(26);
    for (var i = 0; i < this.offset.length; i++) {
      let j = this.offset[i];
      if(i == 0) stroke(this.dot*255,0,0,(this.dot+1)*127);
      else if(this.number.charAt(i+1)==1) stroke(255,0,0);
      else stroke(0,127);
      line(this.x+j[0], this.y+j[1], this.x+j[2], this.y+j[3]);
    }
  }

  setNumber(n) {
    switch (n) {
      case 0:  this.number=0x7E;break;
      case 1:  this.number=0x30;break;
      case 2:  this.number=0x6D;break;
      case 3:  this.number=0x79;break;
      case 4:  this.number=0x33;break;
      case 5:  this.number=0x5B;break;
      case 6:  this.number=0x5F;break;
      case 7:  this.number=0x70;break;
      case 8:  this.number=0x7F;break;
      case 9:  this.number=0x7B;break;
      default: this.number=0x00;
    }
    this.number = "0000000"+this.number.toString(2);
    this.number = this.number.slice(-9,this.number.length);
    return this;
  }

  setDot(s) {
    this.dot = s;
  }
}

let seg = [];
for (var i = 0; i < 4; i++) seg.push(new Segment());

function setup(){createCanvas(windowWidth,windowHeight);windowResized();}
function draw() {
  if(hour()<20 && hour()>=8) background(255); else background(0,8,200);
  seg[1].setDot(second()%2);
  let s = towdigits(hour())+""+towdigits(minute());
  for (var i in seg) seg[3-i].setNumber(Number(s[3-i])).display();
}
function towdigits(str){if((str+"").length<2){return"0"+str}return str}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  for(var i in seg) {
    seg[i].x = (width/2-360)+200*i;
    seg[i].y = height/2-120;
  }
}
