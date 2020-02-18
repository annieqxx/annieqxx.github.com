
function setup() {
    var myCanvas = createCanvas(800, 250);
    frameRate(8);
    noStroke();
    background("#FFD8E0");
    myCanvas.parent(mySketch);
  }
  

  
  function heartShape(x, y, z){
  //  bezierVertex(x2, y2, x3, y3, x4, y4)
  //bezierVertex(x2, y2, z2, x3, y3, z3, x4, y4, z4)
  
  smooth();
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  beginShape();
  vertex((50+x)*z, (15+y)*z);
  bezierVertex((50+x)*z, (-5+y)*z, (90+x)*z, (5+y)*z, (50+x)*z, (40+y)*z);
  vertex((50+x)*z, (15+y)*z);
  bezierVertex((50+x)*z, z*(-5+y), (10+x)*z, z*(5+y), z*(50+x), (40+y)*z);
  endShape();
  }
  
  
  function draw(){
  
    var size = int(random(1,4));
    heartShape(mouseX-50, mouseY-15, size);
  
  }