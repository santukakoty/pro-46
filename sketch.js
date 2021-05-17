var green;
var jet;
var opponents;
var ball;
var balls;
var gameState=1;
var PLAY=1;
var END=0;
var score=0;
var gameOver;

function preload()
{
	greenImage=loadImage("green.jpg");
  jetImage=loadImage("jet.png");
  opponentpurpleImage1=loadImage("opponentpurple.png");
  ballImage=loadImage("ball.png");
  gameOverImage=loadImage("gameOver.png");
 
  
}

function setup() {
	createCanvas(800, 700)
	green=createSprite(400,300);
  green.addImage("green",greenImage);
  green.scale=3.5;

  jet=createSprite(400,600);
  jet.addImage("jet",jetImage);
  jet.scale=0.6;

opponentpurplegroup= new Group();
ballgroup= new Group();

gameOver=createSprite(400,350);
gameOver.addImage("gameOver",gameOverImage);
gameOver.scale=1;

	//Create the Bodies Here.

   
}


function draw() {
  
  background(0);
  

  if(gameState===PLAY){
    if(keyDown("RIGHT_ARROW")){
      jet.x=jet.x+6;
    }
    if(keyDown("LEFT_ARROW")){
     jet.x=jet.x-6;
   }
   if (keyDown("space")) {
    ball();
   
 }
  gameOver.visible=false;

  if(ballgroup.isTouching(opponentpurplegroup)){
opponentpurplegroup.destroyEach();
ballgroup.destroyEach();
score=score+1;
  }
  if(jet.isTouching(opponentpurplegroup)){
    gameState=END;
  }
}
if(gameState===END){
    gameOver.visible=true;
    opponentpurplegroup.destroyEach();
    ballgroup.destroyEach();
    opponentpurplegroup.velocityY=0;
    //opponents.velocityY=0;
    //balls.velocityY =  0;50

}

  
  opponentpurple();

//ball();
  drawSprites();
 
 textSize(20);
  fill("yellow");
  stroke("black");
  strokeWeight(5);
  text("score: "+ score,350,30);
}
function opponentpurple(){
if(frameCount%90===0){
	var opponents=createSprite(Math.round(random(300, 1050),0,0));
	opponents.addAnimation("purple",opponentpurpleImage1);
	opponents.velocityY=6;
  opponents.scale=0.4;
	opponentpurplegroup.add(opponents);
  //opponents.setCollider("rectangle",400,400,100,100);


	}
}
function ball(){
  var balls= createSprite(400, 500, 60, 10);
  balls.addImage(ballImage);
  balls.X = 360;
  balls.x=jet.x;
  balls.velocityY =  -9;
  balls.lifetime = 100;
  balls.scale = 0.15;
  ballgroup.add(balls);

  //return balls;
   
}

