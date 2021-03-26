var ball, ground, dustbin, dustbin2, dustbin3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Paper(200, 200, 40);
	ground=new Ground(400, 680, 800, 30);
	dustbin=new Dustbin(700, 650, 100, 20);
	dustbin2=new Dustbin(650, 600, 20, 100);
	dustbin3=new Dustbin(750, 600, 20, 100);
	

  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:20, y:85})
	}
}

