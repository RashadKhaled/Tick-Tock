function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background("black");  
  translate(200,200)
  rotate(-90)
  var hr= hour()%12
  var min=minute()
  var sec=second()
  var secAngle=map(sec, 0, 60, 0, 360)
  var minAngle=map(min,0, 60, 0, 360)
  var hrAngle=map(hr,0, 12, 0, 360)
  push()
  rotate(secAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(minAngle)
  stroke("green")
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  push()
  rotate(hrAngle)
  stroke("yellow")
  strokeWeight(7)
  line(0,0,60,0)
  pop()
  stroke(255,0,255)
  strokeWeight(10)
  point(0,0)
  noFill()
  stroke("red")
  arc(0,0,300,300,0,secAngle)
  stroke("green")
  arc(0,0,280,280,0,minAngle)
  stroke("yellow")
  arc(0,0,260,260,0,hrAngle)


}