var p_num;
var p_set = [];
var mouseSwitcher = 0;
var incrementer = 0;
var col;

function setup () {

  colorMode(HSB);
  col = color(random(255), random(255), random(40,50), random(100));
  //pixelDensity (displayDensity ());
  createCanvas (windowWidth, windowHeight);
  colorMode (RGB, 256);
  background (255);
  p_num = 10;
  for (var i = 0; i < p_num; i++) {
    p_set.push (new Particles ());
  }
}

function draw () {
  for (var i = 0; i < p_set.length; i++) {
    p_set[i].update ();
//translate(width/2,height/2);
incrementer = incrementer + PI / 200;
  
    if (mouseSwitcher = 1) {
          p_set[i].render ();
  }
}
}

function mousePressed() {
  mouseSwitcher = 1;

}

function mouseReleased() {
  mouseSwitcher = 0;
}

function Particles () {
  var mass = 0;
  var px = random (width);
  var py = random (height);
  var vx = random (-10, 10);
  var vy = random (-10, 10);
  var ax = 0;
  var ay = 0;
  var sc = 1;
  var distance = 0;

  this.update = function () {
    mass = random (1.0, 4.0);
    ax = -1 * vx * 0.4;
    ay = -1 * vy * 0.4;
    ax += (mouseX - px) * 0.2;
    ay += (mouseY - py) * 0.2;
    distance = dist (mouseX, mouseY, px, py);
    if (distance < 10) {
      sc = 10;
    } else {
      sc = 1 / (distance / 200);
    }
    vx += ax / mass * 0.4;
    vy += ay / mass * 0.4;
    px += vx;
    py += vy;
  }

  this.render = function () {
    var stepperCount = map(cos(incrementer), -1, 1, 0, 255);
col = color(40+vy,255-stepperCount,20+(stepperCount/PI),1);
    stroke (col);
    strokeWeight (1);
    fill (col);
    ellipseMode (CENTER);
    ellipse(px,py,vx,vy);

   // point(ax,ay);
    point(vx,vy);
    point(px,py);
   // point(ax,ay);

  }
}