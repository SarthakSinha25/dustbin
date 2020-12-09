
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var wall1,wall2,wall3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	ball = new Ball(100,100,40);
	ground = new Ground(800,400,2000,20);
	wall1 = new Dustbin(700,300,10,100);
	wall2 = new Dustbin(800,350,190,10);
	wall3 = new Dustbin(900,300,10,100);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.Body,ball.Body.position,{x : 40, y : -38});
   }
  
  
  }


