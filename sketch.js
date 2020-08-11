
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var boyImg,boy;
var rope;



function preload()
{
	boyImg = loadImage("sprites/boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree=new TREE(430, 390, 1, 3);
	ground=new Ground(200,690,1200,20);
	stone=new Stone(65, 565, 1, 30);
	mango1=new Mango1(420,500, 29,50)
  mango2=new Mango1(438,480, 29,50)
  mango3=new Mango1(500,410, 29,50)
  mango4=new  Mango1(620,400, 29,50)
  mango5=new  Mango1(720,439,29,50)
  rope = new Rope(stone.body,{x:65,y:565});
	Engine.run(engine);
    boy= loadImage("sprites/boy.png",200,100);
}


function draw() {
  rectMode(CENTER);
  background(225);

  
  drawSprites();
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
mango5.display();
rope.display();   



  imageMode(CENTER);
  image(boy, 160, 620, 252, 200);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly();
  
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPOsition(stone.body,{x:235,y:420})
    launcherObject.attach(stone.body);

  }
}
function detectCollision(stone,mango){
mangoBodyPosition=stone.body.position
stoneBodyPosition=stone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
  Matter.Body.setStatic(mango.body,false)
}


}

