
function setup() {
    var myCanvas = createCanvas(800, 250);
    frameRate(8);
    noStroke();
    background("#FFD8E0");
    myCanvas.parent(mySketch);
  }
  

  
  function heartShape(x, y){
  //  bezierVertex(x2, y2, x3, y3, x4, y4)
  //bezierVertex(x2, y2, z2, x3, y3, z3, x4, y4, z4)
  
  smooth();
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  beginShape();
  vertex((50+x), (15+y));
  bezierVertex((50+x), (-5+y), (90+x), (5+y), (50+x), (40+y));
  vertex((50+x), (15+y));
  bezierVertex((50+x), (-5+y), (10+x), (5+y), (50+x), (40+y));
  endShape();
  }
  
  
  function draw(){
  
    // var size = int(random(1,3));
    heartShape(mouseX-50, mouseY-15);
  
  }