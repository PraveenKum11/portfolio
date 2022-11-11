let x = 0.01;
let y = 0;
let z = 0;

let a = 10;
let b = 28;
let c = 8.0 / 3.0;

let hFactor = 2, wFactor = 2;

let points = new Array();

function setup() {
  if (windowWidth < 1000)
  {
    alert("For Best Experience Switch To Desktop Site");
    return;
  }
  let canvas = createCanvas(windowWidth / wFactor, windowHeight / hFactor, WEBGL);
  canvas.parent('cid_sketch_container')
  colorMode(HSB);
}

function draw() {
  background("#171717");

  let dt = 0.008;
  let dx = (a * (y - x)) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  if (points.length < 4000)
  {
    points.push(new p5.Vector(x, y, z));
  }

  translate(0, 0, -80);
  let camX = map(mouseX, 0, width, -200, 200);
  let camY = map(mouseY, 0, height, -200, 200);
  camera(camX, camY, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  //translate(width/2, height/2);
  scale(5);
  stroke(255);
  noFill();
  strokeWeight(3);

  let hu = 0, chg = 1;
  beginShape();

  for (let v of points) {
	stroke("#DA0037");
	vertex(v.x, v.y, v.z);
	//PVector offset = PVector.random3D();
	//offset.mult(0.1);
	//v.add(offset);
	// hu += chg;
	// if (hu > 255 || hu <= 0) {
	// 	chg = -chg;
	// }
  }
  endShape();
}

function windowResized() {
  resizeCanvas(windowWidth / wFactor, windowHeight / hFactor);
}