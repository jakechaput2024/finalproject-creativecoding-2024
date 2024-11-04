let mx, my;
let lines = [];
let dots = [];


function setup() {

  let numberofDots = random(2, 10);

  createCanvas(600, 600);
  for (let i = 0; i < numberofDots; i++) {
    dots[i] = new Circle(20);
  }
}

function draw() {
  background(220);


  // old lines
  stroke("red");
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    l.draw();
  }

  lineEndingX = mouseX;
  lineEndingY = mouseY;

  // the dots
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]
    dot.draw();
  }

  //snap into place
  if (dist(mouseX, mouseY, this.x, this.y) < 20) {
    console.log("connected!")
  }
}

function mouseClicked() {
  let line = new Line(mx, my, lineEndingX, lineEndingY);
  lines.push(line);
  mx = mouseX;
  my = mouseY;
}

class Line {
  constructor(startX,startY,endX,endY) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
  }
  draw() {
    line(this.startX,this.startY,this.endX,this.endY)
  }
}

class Circle {
  constructor(parameters) {
    this.place(random(width),random(height));
  }
  place(x,y) {
    this.x = x;
    this.y = y;
  }
  draw(){
    circle(this.x, this.y, 50);
  }
}