//  This was developed from Dan Shiffman's Coding Train
//  See 2.2: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

let circleX = 300;
let speed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20, 100, 100);

  noFill();
  rectMode(CENTER);
circle(200, 100, 120);
  circle(circleX, 130, 60);
  circle(circleX, 70, 60);
  circle(circleX + 30, 100, 60);
  circle(circleX - 30, 100, 60);
  circle(circleX - 22, 120, 60);
  circle(circleX - 22, 80, 60);
  circle(circleX + 22, 120, 60);
  circle(circleX + 22, 80, 60);

circle(200, 210, 90);
  circle(circleX, 232, 45);
  circle(circleX, 188, 45);
  circle(circleX - 22, 212, 45);
  circle(circleX + 22, 212, 45);
  circle(circleX - 15, 226, 45);
  circle(circleX + 15, 226, 45);
  circle(circleX -15, 194, 45);
  circle(circleX +15, 194, 45);

  circle(200, 290, 60);
    circle(circleX + 15, 290, 30);
    circle(circleX - 15, 290, 30);
    circle(circleX, 305, 30);
    circle(circleX, 275, 30);
    circle(circleX - 10, 300, 30);
    circle(circleX - 10, 280, 30);
    circle(circleX + 10, 300, 30);
    circle(circleX + 10, 280, 30);

circle(200, 340, 30);
  circle(circleX, 348, 15);
  circle(circleX, 332, 15);
  circle(circleX - 8, 340, 15);
  circle(circleX + 8, 340, 15);


  circle(200 - 100, 160, 30);
    circle(circleX - 100, 168, 15);
    circle(circleX - 100, 152, 15);
    circle(circleX - 92, 160, 15);
    circle(circleX + 108, 160, 15);

circle(200 + 100, 160, 30);
  circle(circleX + 100, 168, 15);
  circle(circleX + 100, 152, 15);
  circle(circleX - 108, 160, 15);
  circle(circleX + 92, 160, 15);

      line(200, 0, 200, 40);
      line(200, 160, 200, 165);
      line(200, 255, 200, 260);
      line(200, 320, 200, 325);
      arc(200, 145, 200, 250, PI, TWO_PI);

  if (circleX > width) {
    speed = speed* -1
  } else if (circleX < 0) {
    speed = speed* -1
  }
  circleX = circleX + speed;

//  If boxX reaches the edge of the canvas, move left
//  If boxX reaches the edge of the canvas, boxX-1
//  If boxX is great than canvas width, boxX-1
//  If boxX > width, boxX-1

//  What happens when the box reaches the left edge?
}
