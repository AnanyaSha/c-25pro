
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject ,PaperObject;
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	PaperObject=new Paper(300, 500 ,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 

  groundObject.display();
  dustbinObj.display();
  PaperObject.display();

}


function keyPressed() {
if(keyCode === UP_ARROW) {

Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:50,y:-50});	

}
}
