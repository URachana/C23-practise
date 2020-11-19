const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, box1,box2;

function setup() {
createCanvas(400,400);

myEngine = Engine.create();
myWorld = myEngine.world;

ground = new createGround(200,390,400,20);

box1 = new createBox(200,300,50,50);
box2 = new createBox(240,100,50,80);

}

function draw() {
  background(0);  
  
  Engine.update(myEngine);
  rectMode(CENTER);
 
  
 
  box1.display();
  box2.display();
  ground.show();
}