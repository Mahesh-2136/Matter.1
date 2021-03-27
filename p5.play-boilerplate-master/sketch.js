function setup() {
  createCanvas(400,400);
  e = Matter.Engine.create();
  w = e.world
  var op1 = {
    
    restitution:1.5

  }


  bo = Matter.Bodies.circle(200,200,40,op1);
  Matter.World.add(w,bo);

 console.log(bo);

  var op = {
    isStatic:true,
    

  }
  bo1 = Matter.Bodies.rectangle(200,380,400,40,op);
  Matter.World.add(w,bo1);
}

function draw() {
  background("yellow");  
  Matter.Engine.update(e)
  rectMode(CENTER);

  circle(bo.position.x,bo.position.y,80);
  rect(bo1.position.x,bo1.position.y,400,40);
}