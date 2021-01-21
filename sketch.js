var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400, 400);
  
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  
  //translation and rotation
  translate(200, 200);
  rotate (-90);


  hr = hour();
  mn = minute();
  sc = second();

  // Creating the angles for the time hands 
  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

//drawing seconds hands
  push();
  rotate(scAngle);
  strokeWeight(7);
  stroke("blue");
  line(0, 0, 50, 0);
  pop();


  //drawing mins hands
  push();
  rotate(mnAngle);
  strokeWeight(7);
  stroke("red");
  line(0, 0, 75, 0);
  pop();
  
  //drawing hour hands
  push();
  rotate(hrAngle);
  strokeWeight(7);
  stroke("green");
  line(0, 0, 50, 0);
  pop();

  stroke("blue");
  strokeWeight(7);
  noFill();

  arc(0, 0, 200, 200, 0, scAngle);

  stroke("red");
  arc(0, 0, 220, 220, 0, mnAngle);

  stroke("green");
  arc(0, 0, 240, 240, 0, hrAngle);

  drawSprites();
}