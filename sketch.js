
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var attach;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(936,212,30);
	mango4=new mango(1200,212,30);
	mango5=new mango(1073,205,30);
	mango6=new mango(1003,200,30);
	mango7=new mango(1090,225,30);
	mango8=new mango(1130,205,30);
	mango9=new mango(1153,100,30);
	mango10=new mango(1163,125,30);

	stoneObj=new Stone(232,420,20)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
    attach = new Chain(stoneObj.body,{x :232,y :420})

	
	Engine.run(engine);

}

function draw() {

	//console.log(mouseX,mouseY);

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneObj.display();
 attach.display();
  

  groundObject.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    attach.fly();
}

function detectollision(lstone,lmango){

	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){

		Matter.Body.setStatic(lmango.body,false)

	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x :232,y :420})
		attach.attach(stoneObj.body);
	}

}