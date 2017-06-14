/* Declaration of Variables */

var x = 0.01;
var y = 0;
var z = 0;


var segma = 10;
var roo = 28;
var beta = 8.0 / 3.0;

var ptsX = [];
var ptsY = [];
var ptsZ = [];
function setup() {

createCanvas(800 , 600 ,WEBGL);
colorMode(HSB);



}


function draw() {
background(0);
  var dt = 0.01;

var dx = (segma * (y - x)) * dt;
var dy = (x * (roo - z) - y) * dt;
var dz = (x * y - beta * z) * dt;


x = x + dx;
y = y + dy;
z = z + dz;


orbitControl();

ptsX.push(x);
ptsY.push(y);
ptsZ.push(z);
translate(0 , 0 , -80);
scale(5);

// rotateZ(frameCount * 0.01);
//rotateX(frameCount * 0.01);
rotateY(frameCount * 0.005);
var hu = 0;
beginShape();
for(var i = 0 ; i < ptsX.length ; i++) {
  
  fill(hu , 255 , 255);
  vertex(ptsX[i] ,ptsY[i],ptsZ[i]);
  hu += 0.1;
  if(hu > 255) {
    hu = 0;

  }
}
endShape();





}