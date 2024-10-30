let mx, my;
let lines = [];
let dots = [];
let numberofDots = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberofDots; i++) {
    dots[i] = new Circle(50);
  }
}

function draw() {
  background(220);
  stroke("black");
  line(mx,my,mouseX,mouseY);
  stroke("red");
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    l.draw();
  }
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]
    dot.draw();
  }
}

function mouseClicked() {
  let line = new Line(mx,my,mouseX,mouseY);
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
    circle(this.x, this.y, 200);
  }
}