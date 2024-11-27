let mx, my;
let lines = [];
let lineEndingX, lineEndingY;
let allConnected = false; //when lines connect dots, this'll become true
let currentdotIndex = 0;
let state = 0;
let stage = 0;
// let img;
let gradient;
let text1, text2;
let song;
let allCoordinates = [];
let stars = [];
let numberofStars = 150;
let meteorX = 0;
let meteorY = 0;
let meteorDiameter = 0.5;
let meteorSpeed = 0;
var timerStartTime;
let keklosfinal, kyprafull, kairos, teriliou, kyrin, tarwynus, squid, bo, centaurking, pharoah, monster, lyre, eye, hydra, demigod, dog;
let crab, fish, hourglass, bird, horse, bull, squidy, bobo, centaur, oldking, monsterking, lyre2, eyeball, snakes, man, doggy, endscreen;

function preload() {
  //img = loadImage('/assets/Placeholder.png');
  gradient = loadImage('assets/gradient.png');
  text1 = loadImage('assets/text1.gif');
  text2 = loadImage('assets/text2.gif');
  song = loadSound('assets/music.mp3');
  keklosfinal = loadImage('assets/keklosfinal.gif');
  kyprafull = loadImage('assets/kyprafull.gif');
  kairos = loadImage('assets/kairos.gif');
  teriliou = loadImage('assets/Teriliou.gif');
  kyrin = loadImage('assets/kyrin.gif');
  tarwynus = loadImage('assets/tarwynus.gif');
  squid = loadImage('assets/squid.gif');
  bo = loadImage('assets/bo.gif');
  centaurking = loadImage('assets/centaurking.gif');
  pharoah = loadImage('assets/pharoah.gif');
  monster = loadImage('assets/monster.gif');
  lyre = loadImage('assets/lyre.gif');
  eye = loadImage('assets/eye.gif');
  hydra = loadImage('assets/hydra.gif');
  demigod = loadImage('assets/demigod.gif');
  dog = loadImage('assets/dog.gif');
  crab = loadImage('assets/crab.png');
  fish = loadImage('assets/fish.png');
  hourglass = loadImage('assets/hourglass.png');
  bird = loadImage('assets/bird.png');
  horse = loadImage('assets/horse.png');
  bull = loadImage('assets/bull.png');
  squidy = loadImage('assets/squid.png');
  bobo = loadImage('assets/bo.png');
  centaur = loadImage('assets/centaur.png');
  oldking = loadImage('assets/oldking.png');
  monsterking = loadImage('assets/monsterking.png');
  lyre2 = loadImage('assets/lyre.png');
  eyeball = loadImage('assets/eye.png');
  snakes = loadImage('assets/snakes.png');
  man = loadImage('assets/man.png');
  doggy = loadImage('assets/doggy.png');
  endscreen = loadImage('assets/endscreen.png');
}

function setup() {
  song.play();

  allCoordinates = [
    [createVector(322, 65), createVector(128, 317), createVector(365, 534), createVector(800, 634), createVector(1076, 502), createVector(1186, 357), createVector(1136, 283), createVector(973, 86)],
    [createVector(258, 179), createVector(409, 385), createVector(1011, 191), createVector(1238, 306), createVector(1217, 452)],
    [createVector(356, 173), createVector(425, 496), createVector(990, 133), createVector(973, 450), createVector(357, 174)],
    [createVector(208, 89), createVector(403, 24), createVector(539, 151), createVector(668, 216), createVector(828, 172), createVector(1141, 40), createVector(1177, 152), createVector(1158, 242), createVector(889, 490), createVector(632, 385), createVector(410, 525), createVector(540, 655), createVector(666, 596)],
    [createVector(1141, 40), createVector(1177, 152), createVector(1158, 242), createVector(516, 416), createVector(189, 596), createVector(831, 509)],
    [createVector(180, 86), createVector(253, 159), createVector(223, 251), createVector(303, 271), createVector(397, 212), createVector(316, 473), createVector(428, 610), createVector(466, 575), createVector(440, 475), createVector(543, 288), createVector(752, 425), createVector(725, 499), createVector(791, 605), createVector(864, 612), createVector(858, 474), createVector(978, 393), createVector(1175, 256), createVector(1044, 135), createVector(896, 114)],
    [createVector(700, 668), createVector(668, 559), createVector(528, 498), createVector(576, 402), createVector(259, 383), createVector(431, 42), createVector(618, 70), createVector(1038, 240), createVector(853, 335), createVector(1008, 396), createVector(988, 488), createVector(1131, 463), createVector(1199, 540), createVector(1184, 663)],
    [createVector(573, 109), createVector(598, 264), createVector(590, 606), createVector(953, 583), createVector(891,468)],
    [createVector(330, 63), createVector(309, 215), createVector(348, 385), createVector(462, 586), createVector(974, 313), createVector(1052, 528), createVector(990, 628)],
    [createVector(572, 626), createVector(569, 558), createVector(566, 492), createVector(486, 489), createVector(459, 345), createVector(525, 222), createVector(529, 131), createVector(677, 71), createVector(891, 138), createVector(956, 289), createVector(908, 430), createVector(821, 490), createVector(820, 554)],
    [createVector(497, 110), createVector(420, 153), createVector(425, 250), createVector(546, 231), createVector(606, 319), createVector(500, 464), createVector(464,635), createVector(889, 582), createVector(785, 394), createVector(924, 190)],
    [createVector(212, 141), createVector(387, 99), createVector(441, 255), createVector(370, 402), createVector(451, 579), createVector(729, 635), createVector(964,547), createVector(951, 254), createVector(891, 125), createVector(1000, 80), createVector(1136, 169)],
    [createVector(370, 402), createVector(451, 579), createVector(729, 635), createVector(964,547), createVector(817, 359), createVector(636, 280), createVector(387, 389)],
    [createVector(202, 302), createVector(361, 141), createVector(603, 89), createVector(696, 188), createVector(522, 232), createVector(466, 352), createVector(394, 490), createVector(445, 596), createVector(542, 516), createVector(504, 421), createVector(640, 292), createVector(730, 227), createVector(808, 286), createVector(716, 363), createVector(674, 419), createVector(678, 551), createVector(794, 607), createVector(854, 570), createVector(802, 477), createVector(1272, 415), createVector(1364,194), createVector(1134, 59), createVector(943, 42), createVector(859, 86)],
    [createVector(859, 86), createVector(808, 286), createVector(716, 363), createVector(674, 419), createVector(678, 551)],
    [createVector(466, 352), createVector(504, 421), createVector(674, 419), createVector(716, 363), createVector(808, 286)],
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

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255); 
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis();
        } 
        image(fish, 0,0);
        image(kyprafull, 400, 500);
        
        if (millis() - timerStartTime > 30500) {//30500) { 
          state = 4;
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

    case 4:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 

        image(hourglass,0,0)
        image(kairos, 400, 500)

        if (millis() - timerStartTime > 11000){//11000) { 
          state = 5;
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

      case 5:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(bird,0,0);
        image(teriliou, 400, 500);

        if (millis() - timerStartTime > 42000){//42000){
          state = 6;
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

      case 6:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(horse,0,0);
        image(kyrin, 400, 500);

        if (millis() - timerStartTime > 31000){
          state = 7;
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
    
      case 7:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(bull,0,0);
        image(tarwynus, 400, 500);

        if (millis() - timerStartTime > 25000){
          state = 8;
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

      case 8:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(squidy,0,0);
        image(squid, 400, 500);

        if (millis() - timerStartTime > 25000){
          state = 9;
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

      case 9:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(bobo,0,0);
        image(bo, 400, 500);

        if (millis() - timerStartTime > 13000){
          state = 10;
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

      case 10:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(centaur,0,0);
        image(centaurking, 400, 500);

        if (millis() - timerStartTime > 17000){
          state = 11;
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

      case 11:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(oldking,0,0);
        image(pharoah, 400, 500);

        if (millis() - timerStartTime > 30000){
          state = 12;
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

      case 12:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(monsterking,0,0);
        image(monster, 400, 500);

        if (millis() - timerStartTime > 49000){
          state = 13;
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

      case 13:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(lyre2,0,0);
        image(lyre, 400, 500);

        if (millis() - timerStartTime > 13900){
          state = 14;
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

      case 14:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(eyeball,0,0);
        image(eye, 400, 500);

        if (millis() - timerStartTime > 12000){
          state = 15;
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

      case 15:
        
      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(snakes,0,0);
        image(hydra, 400, 500);

        if (millis() - timerStartTime > 24000){
          state = 16;
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

      case 16:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(man,0,0);
        image(demigod, 400, 500);

        if (millis() - timerStartTime > 10000){
          state = 17;
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

      case 17:

      fill(199, 249, 255);

      //old lines
      stroke(199, 249, 255);
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        l.draw();
      }

      noStroke();

      lineEndingX = mouseX;
      lineEndingY = mouseY;

      for (let i = 0; i < allCoordinates[stage].length; i++) {
        const xy = allCoordinates[stage][i];
        circle(xy.x, xy.y, random(18, 20));
        if (dist(mouseX, mouseY, xy.x, xy.y) < 7) {
          lineEndingX = xy.x;
          lineEndingY = xy.y;
        }
      }

      stroke(199, 249, 255);
      line(mx, my, lineEndingX, lineEndingY);

      if (allConnected) {

        if (timerStartTime === undefined) {
          timerStartTime = millis(); // Reset the timer when entering Case 2
        } 
        image(doggy,0,0);
        image(dog, 400, 500);

        if (millis() - timerStartTime > 17000){
          state = 18;
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

      case 18:

      image(endscreen, 0, 0);

      break;




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

function meteorShower (meteorSpeed) {
  fill(199, 249, 255);
  circle(meteorX, meteorY, meteorDiameter);
  circle(meteorX + 400, meteorY - 300, meteorDiameter);
  circle(meteorX + 700, meteorY + 50, meteorDiameter);
  circle(meteorX, meteorY + 420, meteorDiameter);
  meteorX = meteorX + meteorSpeed;
  meteorY = meteorX + meteorSpeed;

  if(meteorX > 1399 || meteorY > 703) {
    meteorX = 0;
    meteorY = 0;
    meteorDiameter = 1;
  }

}
