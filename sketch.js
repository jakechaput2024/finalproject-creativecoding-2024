let mx, my;
let lines = [];

function setup() {
  createCanvas(400, 400);
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