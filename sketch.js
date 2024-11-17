let mx, my;
let lines = [];
let dots = [];
let lineEndingX, lineEndingY;
let allConnected = false; //when lines connect dots, this'll become true
let numberofDots;
let state = 0;
let img;
let gradient;
let text1, text2;


function preload() {
  img = loadImage('/assets/Rat.png');
  gradient = loadImage('/assets/gradient.png');
  text1 = loadImage('/assets/text1.gif');
  text2 = loadImage('/assets/text2.gif');
}

function setup() {

  numberofDots = floor(random(2, 15));

  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberofDots; i++) {
    dots[i] = new Circle(25);
  }
  
}

function draw() {
  //background(2, 13, 23);
  image(gradient, 0, 0)

  switch (state) {
    case 0:
      background("black");
      
      image(text1, 400, 500);

      if (millis() > 4900) {
        state = 1;
      }

      break;

    case 1:
      background("black");
      
      image(text2, 400, 500);

      if (millis() > 9900) {
        state = 2;
      }

      break;

    case 2:

      // old lines
      stroke(199, 249, 255);
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
      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {
        fill("green");
        textSize(32);
        textAlign(CENTER, CENTER);
        text("You Won!", width / 2, height / 2);
        image(img, 0, 0);
      }
      break;

    case 3:
      
  }
}


function mouseClicked() {
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]
    if (dist(mouseX, mouseY, dot.x, dot.y) < 7) {
      let line = new Line(mx, my, dot.x, dot.y);
      lines.push(line);

      mx = dot.x;
      my = dot.y;
  if (lines.length === numberofDots) {
    allConnected = true;
  }
  break;
}
  }
}