let mx, my;
let lines = [];
let dots = [];
let lineEndingX, lineEndingY;
let allConnected = false; //when lines connect dots, this'll become true
let numberofDots;

function setup() {

   numberofDots = floor(random(2, 10));

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
  }

  lineEndingX = mouseX;
  lineEndingY = mouseY;

  // the dots
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]
    dot.draw();


    textSize(16);
    textAlign(CENTER, CENTER);
    text(i + 1, dot.x, dot.y - 20);
    
    if (dist(mouseX, mouseY, dot.x, dot.y) < 7) {
      lineEndingX = dot.x;
      lineEndingY = dot.y;
    }
  }

  // current line
  stroke("black");
  line(mx, my, lineEndingX, lineEndingY);

  if (allConnected) {
    fill("green");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("You Won!", width / 2, height / 2);
  }
 
  

}

function mouseClicked() {
  let line = new Line(mx, my, lineEndingX, lineEndingY);
  for (let i = 0; i < dots.length; i++) {
  const dot = dots[i]
  if (dist(mouseX, mouseY, dot.x, dot.y) < 7) {
    lineEndingX = dot.x;
    lineEndingY = dot.y;
    lines.push(line);
    break;
  }
}

  mx = mouseX;
  my = mouseY;
  if (lines.length === numberofDots) {
    allConnected = true;
  }
}
  //tried to change line color depending on distance to hide it
 
