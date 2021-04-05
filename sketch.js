const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var snow2;
var snow4;
function preload() {
	snow2 = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;

 
  snow4=new Snow(200,100,100,100);
Engine.run(engine);
}
  
function draw() {
  snow4.display();
  background(snow2, 255,255,255);  
  drawSprites();
}