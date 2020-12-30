// function([string1, string2],target id,[color1,color2])    
consoleText(['Developer', 'Designer', 'Product Manager'], 'text',['lightblue','tomato', '#AF9DD0']);


function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    frameRate(8);
    noStroke();
   // background("#FFD8E0");
    myCanvas.parent(mySketch);
  }
  

  
  function heartShape(x, y){
  //  bezierVertex(x2, y2, x3, y3, x4, y4)
  //bezierVertex(x2, y2, z2, x3, y3, z3, x4, y4, z4)
  
  smooth();
  noStroke();
  fill(random(255), random(255), random(255), 70);
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

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".section").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});