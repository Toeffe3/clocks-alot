function setup(){createCanvas(550,200);canvas.style.paddingLeft=(windowWidth/2-275)+"px";canvas.style.paddingTop=(windowHeight/2-100)+"px"}
let arr = [
  [200,100,-100,-100],
  [400,60,100,-100],
  [200,140,-100,100],
  [150,120,-100,100],
  [420,80,100,-100],
  [260,140,100,100],
  [340,160,-100,100],
  [220,80,100,-100],
  [380,100,100,100],
  [200,60,100,-100],
  [220,160,-100,100],
  [280,120,100,100],
]
let arr2 = [
  [140,30],
  [20,30],
  [40,30],
  [100,30],
  [80,30],
  [120,30],
  [60,30],
  [180,30],
  [160,30],
]
let arr3 = [
  [350,90,25,-25],
  [300,180,25,25],
  [260,180,25,25],
  [340,180,25,25],
  [230,120,25,-25],
]

function draw(){
  let c = (!((hour()>20&&hour()<24)||(hour()>0&&hour()<8))*255);
  document.body.style.backgroundColor = "#"+c+c+c;
  let on = color(255,128,0);
  let off = color(128,64,0);
  noFill(off)
  for (var i = 0; i < arr.length; i++) {
    form((i<hour()%12)?on:off,1,arr[i][0],arr[i][1],arr[i][2],arr[i][3]);
  }
  for (var i = 0; i < arr2.length; i++) {
    form((i<minute()%10)?on:off,2,arr2[i][0],arr2[i][1]);
  }
  for (var i = 0; i < arr3.length; i++) {
    form((i<floor(minute()/10))?on:off,3,arr3[i][0],arr3[i][1],arr3[i][2],arr3[i][3]);
  }
}

function towdigits(str){if((str+"").length<2){return"0"+str}return str}

function form(c, t, x, y, xs, ys) {
  noFill();
  stroke(c);
  strokeWeight(10);
  switch (t) {
    case 1:
      line(x,y,x+xs,y)
      line(x+xs,y,x+xs*1.25,y+ys*.25)
      break;
    case 2:
      line(x,y,x,y+30)
      break;
    case 3:
      arc(x, y, xs, ys, 0, PI);
  }
}
