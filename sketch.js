const Engine = Matter.Engine;
const World= Matter.World;
const Body=Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var snow = [];
var bgimg;
function preload(){
bgimg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1300,600);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgimg);  
  drawSprites();

  if(frameCount%90===0){
    snow.push(new Snow(random(width/2-500,width/2+500),10,10))
    }
 for (var j = 0; j < snow.length; j++) {
  snow[j].display();
}

  
}