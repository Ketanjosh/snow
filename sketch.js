const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var snow2;
var snow4;
var snow =[]

function preload() {
	snow2 = loadImage("snow3.jpg");
  


}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
	
	
	

Engine.run(engine);
}
  
function draw() {
  background(snow2);
  if(frameCount%10===0){
    snow.push(new Snow(random(0,800),0,5))
  }
  
 for(var i=0;i<snow.length;i++){
   snow[i].display()
 }
  
  drawSprites();
	

 


}