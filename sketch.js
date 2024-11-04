let mx, my;
let lines = [];
let dots = [];
let lineEndingX, lineEndingY;

function setup() {

  let numberofDots = random(2, 10);

  createCanvas(600, 600);
  for (let i = 0; i < numberofDots; i++) {
    dots[i] = new Circle(30);
  }
}

function draw() {
  background(220);


  // old lines
  stroke("red");
  
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    l.draw();

    if (dist(mx, my, lineEndingX, lineEndingY) > 7) {
      stroke(220);
    
    }
  }

  lineEndingX = mouseX;
  lineEndingY = mouseY;

  // the dots
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]
    dot.draw();
    if (dist(mouseX, mouseY, dot.x, dot.y) < 7) {
      lineEndingX = dot.x;
      lineEndingY = dot.y;
    }
  }

  // current line
  stroke("black")
  line(mx, my, lineEndingX, lineEndingY);
 

}

function mouseClicked() {
  let line = new Line(mx, my, lineEndingX, lineEndingY);
  lines.push(line);
  mx = mouseX;
  my = mouseY;

  //tried to change line color depending on distance to hide it
 
}