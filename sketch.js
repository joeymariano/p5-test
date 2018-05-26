var mouseBool = false;
var touchBool = false;
var mouseWheelBool = false;
var myCanvas;

function setup() {
  // put setup code here
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvas");
  background(0);
  noStroke();
}

function draw() {
  background(0);

  if (mouseBool == true || touchBool == true || mouseWheelBool == true ){
    for (var i=0; i < 400; i+=1){
      let colr = selectColr(int(random(1,6)));
      fill(colr);
      rect(randoHundoNumbo(0,displayWidth), randoHundoNumbo(0,displayHeight), 20, 20);
    }
    mouseBool = false;
    touchBool = false;
    mouseWheelBool = false;
  }

}

function mouseMoved(){
  mouseBool = true;
  return false;
}

function mouseWheel(event) {
  mouseWheelBool = true;
  return false;
}

function touchMoved() {
  touchBool = true;
  return false;
}

function randoHundoNumbo(lowerNumb, higherNumb) {
  var numb = random(lowerNumb, higherNumb);
  if (numb >= 11) {
    return Math.ceil(numb/20)*20;
  } else {
    return numb = 0;
  }
  return false;
}

function selectColr(numb) {
  let result;
  switch(numb) {
    case 1:
    result = color(102,217,239);
      break;
    case 2:
      result = color(69,196,104);
      break;
    case 3:
      result = color(255,121,198);
      break;
    case 4:
      result = color(189,147,249);
      break;
    case 5:
      result = color(40,42,54);
      break;
  }
  return result;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
