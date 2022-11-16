function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#f2e8cf');

  // fill('black')
	// textSize(50)
	// text( int(mouseX)+" , "+int(mouseY),50,50 )
  
  push()
  translate(width/2,height/3)

  fill(0)
  ellipse(-170,-100,120) //左包包頭
  fill(0) 
  ellipse(170,-100,120) //左包包頭

  fill('#d62828')
  stroke(0)
  strokeWeight(5)
  ellipse(-110,-65,85) //左髮帶
  fill('#d62828')
  stroke(0)
  strokeWeight(5)
  ellipse(110,-65,85) //右髮帶
  
  fill(0)
  ellipse(40,250,60,200) //右腳
  fill(0)
  ellipse(-40,250,60,200) //左腳

  fill('#ffe8d6')
  ellipse(148,217,45) //右手
  fill('#ffe8d6')
  ellipse(-148,217,45) //左手

  fill('#d62828')
  beginShape() //右手袖子
  curveVertex(80,80)
  curveVertex(162,190)
  curveVertex(120,225)
  curveVertex(75,100)
  endShape(CLOSE)
  fill('#d62828')
  beginShape() //左手袖子
  curveVertex(-80,80)
  curveVertex(-162,190)
  curveVertex(-120,225)
  curveVertex(-75,100)
  endShape(CLOSE)

  // fill('#d62828')
  // noStroke()
  // arc(0,245,245,100,100,250,OPEN)

  fill('#d62828')
  stroke(0)
  beginShape() //身體
  vertex(75,80)
  vertex(125,245)
  vertex(-125,245)
  vertex(-75,80)
  endShape(CLOSE)

  fill(0)
  ellipse(0,-20,300,250) //頭髮

  fill('#ffe8d6')
  ellipse(0,0,250,200) //臉

  fill('#fec5bb')
  noStroke()
  ellipse(77,40,40) //右腮紅
  fill('#fec5bb')
  noStroke()
  ellipse(-77,40,40) //左腮紅
  
  // fill('#ffe8d6')
  // stroke(0)
  // arc(0,40,40,30,0,-330,OPEN) //嘴巴
  
  stroke(0)
  line(105,-10,45,10) //右眼
  stroke(0)
  line(-105,-10,-45,10) //左眼

  fill('#ffe8d6')
  arc(75,-60,80,20,10,-120,OPEN) //左眉
  fill('#ffe8d6')
  arc(-75,-60,80,20,10,-120,OPEN) //右眉

  if(mouseIsPressed) //嘴巴
  {
    fill('while')
    arc(0,40,120,60,0,PI+TWO_PI,CHORD)
    stroke(0)
    line(0,40,0,68)
    line(-30,40,-30,63)
    line(30,40,30,63)
  }
  else
  {
    fill('#ffe8d6')
    arc(0,40,40,30,0,PI+TWO_PI,OPEN)
  }
  
  pop()
 }

  var song
  var songIsplay=false
  var amp
  function preload()
  {
  song = loadSound("pucca.mp3");
  }

  function mousePressed()
  {
   if(!songIsplay){
     song.play()
     songIsplay = true
     amp=new p5.Amplitude()
   }
   else{
     song.pause()
     songIsplay = false
   }
  }