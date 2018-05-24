

function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
  background(0);
  noStroke();
}

function draw() {
  let colr = selectColr(int(random(1,6)));

  fill(colr);

  rect(randoHundoNumbo(0,displayWidth), randoHundoNumbo(0,displayHeight), 20, 20);
}

function randoHundoNumbo(lowerNumb, higherNumb) {
  var numb = random(lowerNumb, higherNumb);
  if (numb >= 11) {
    return Math.ceil(numb/20)*20;
  } else {
    return numb = 0;
  }
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
