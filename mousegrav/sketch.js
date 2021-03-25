let entities = []
let climbSpeed = 80
let entityCount = 4000
let slideSpeed = 1
let width = 100

function setup(){
  let cx = windowWidth/2
  let cy = windowHeight/2
  createCanvas(windowWidth,windowHeight)
  for(let i = 0; i<entityCount;i++){
    entities.push(new entity(i))
  }
}

function draw(){
  let cx = windowWidth/2
  let cy = windowHeight/2
  background(20)
  translate(cx,cy)
  entities.forEach(e => {
    e.update()
    e.render()
  });
}

class entity{
  constructor(i){
    this.i = i
    this.x = (entityCount/2 - i)*(windowWidth/(entityCount+1000))
    this.y = 0
  }
  update(){
    this.y = (climbSpeed*tan(this.x+(frameCount/100)))
    this.x = this.x
  }
  render(){
    push()
    fill(220)
    noStroke()
    ellipse(this.x,this.y,2,2)
    pop()
  }
}