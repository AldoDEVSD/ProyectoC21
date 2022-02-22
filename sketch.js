
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,leftSide,rightSide;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//crear suelo aqui.
	ground = new Ground(width/2,670,width,20)
	leftSide = new Ground(600,640,20,80)
	rightSide = new Ground(500,640,20,80)
	//crear los cuerpos aquí.
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(100,50,18,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.Crear();
	leftSide.Crear();
	rightSide.Crear();

	keyPressed();

  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,18)
 
}

function keyPressed(){
	if(keyDown("space")){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:16.1,y:6})
	}
}



