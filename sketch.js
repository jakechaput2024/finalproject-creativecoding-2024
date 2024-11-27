let mx, my;
let lines = [];
let lineEndingX, lineEndingY;
let allConnected = false; //when lines connect dots, this'll become true
let currentdotIndex = 0;
let state = 0;
let stage = 0;
let gradient;
let text1, text2;
let song;
let allCoordinates = [];
let stars = [];
let numberofStars = 20;
var timerStartTime;
let keklosfinal, kyprafull, kairos, teriliou, kyrin, tarwynus, squid, bo, centaurking, pharoah, monster, lyre, eye, hydra, demigod, dog;
let crab, fish, hourglass, bird, horse, bull, squidy, bobo, centaur, oldking, monsterking, lyre2, eyeball, snakes, man, doggy, endscreen;

function preload() {
  gradient = loadImage('/assets/gradient.png');
  text1 = loadImage('/assets/text1.gif');
  text2 = loadImage('/assets/text2.gif');
  song = loadSound('/assets/music.mp3');
  keklosfinal = loadImage('/assets/keklosfinal.gif');
  kyprafull = loadImage('/assets/kyprafull.gif');
  kairos = loadImage('/assets/kairos.gif');
  teriliou = loadImage('/assets/Teriliou.gif');
  kyrin = loadImage('/assets/kyrin.gif');
  tarwynus = loadImage('/assets/tarwynus.gif');
  squid = loadImage('/assets/squid.gif');
  bo = loadImage('/assets/bo.gif');
  centaurking = loadImage('/assets/centaurking.gif');
  pharoah = loadImage('/assets/pharoah.gif');
  monster = loadImage('/assets/monster.gif');
  lyre = loadImage('/assets/lyre.gif');
  eye = loadImage('/assets/eye.gif');
  hydra = loadImage('/assets/hydra.gif');
  demigod = loadImage('/assets/demigod.gif');
  dog = loadImage('/assets/dog.gif');
  crab = loadImage('/assets/crab.png');
  fish = loadImage('/assets/fish.png');
  hourglass = loadImage('/assets/hourglass.png');
  bird = loadImage('/assets/bird.png');
  horse = loadImage('/assets/horse.png');
  bull = loadImage('/assets/bull.png');
  squidy = loadImage('/assets/squid.png');
  bobo = loadImage('/assets/bo.png');
  centaur = loadImage('/assets/centaur.png');
  oldking = loadImage('/assets/oldking.png');
  monsterking = loadImage('/assets/monsterking.png');
  lyre2 = loadImage('/assets/lyre.png');
  eyeball = loadImage('/assets/eye.png');
  snakes = loadImage('/assets/snakes.png');
  man = loadImage('/assets/man.png');
  doggy = loadImage('/assets/doggy.png');
  endscreen = loadImage('/assets/endscreen.png');
}

function setup() {
  //song.play();

  allCoordinates = [
    [createVector(322, 65), createVector(128, 317), createVector(365, 534), createVector(800, 634), createVector(1076, 502), createVector(1186, 357), createVector(1136, 283), createVector(973, 86)],

  ]

  createCanvas(1399, 703);
  noCursor();

  for (let i = 0; i < numberofStars; i++) {
    stars[i] = new Stars(1);

  timerStartTime = millis();
}
}

function draw() {
  image(gradient, 0, 0);

  circle(mouseX, mouseY, random(5, 8));
  line(mouseX, mouseY, pmouseX, pmouseY);

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i]
    star.draw();
  }
  
  switch (state) {
    case 0:
      background("black");
      image(text1, 400, 500); //commented out for testing
      if (millis()-timerStartTime > 4900){
        state = 1;

        timerStartTime = millis();
      }
  
      break;

    case 1:
      background("black");
      image(text2, 400, 500); //commented out for testing
      if (millis()-timerStartTime > 4900) { //4900
        state = 2;

        timerStartTime = millis();
      }
      break;

    case 2:
      fill(199, 249, 255);
      text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

      drawingContext.shadowBlur = 30;
      drawingContext.shadowColor = color(199, 249, 255);

      // old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke(); //no stroke color for the circles

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      // the coordinates
      for (let i = 0; i < allCoordinates[stage].length; i++) { //(let i = 0; i < dots.length; i++) {
        const xy = allCoordinates[stage][i]; //dot = dots[i]
        circle(xy.x, xy.y, random(18, 20)); //dot.draw();
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      // current line
      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        }    
        image(crab, 0, 0);
        image(keklosfinal, 400, 500);

        if (millis() - timerStartTime > 12500) { //12500) { 
          state = 3;
          stage = (stage + 1) % allCoordinates.length;
          console.log(stage);

          lines = [];
          allConnected = false;
          currentdotIndex = 0;
          mx = undefined;
          my = undefined;
          timerStartTime = undefined;
        }
      } else {
        timerStartTime = undefined; 
      }
    
      break;

    case 3:

      
  }
}


function mouseClicked() {
  for (let i = 0; i < allCoordinates[stage].length; i++) {
    const xy = allCoordinates[stage][i];
    if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
      if (i === currentdotIndex) {
        currentdotIndex++;
        let line = new Line(mx, my, xy.x, xy.y);
        lines.push(line);
        mx = xy.x;
        my = xy.y;

        if (lines.length === allCoordinates[stage].length) {
          allConnected = true;
        }
      } else { }
      break;
    }
  }
}

function keyPressed() {
  if (key === 'm') {
    song.play();
    if (song.isPlaying()) {
      song.stop();
    }
    song.loop();
  } else if (key === 'M') {
    song.play();
    if (song.isPlaying()) {
      song.stop();
    }
    song.loop();
  }
  if (key === 's') {
    song.stop();
  }
}