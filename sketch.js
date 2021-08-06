var pathImage , path;
var runnerImage , runner;
var invisbleBoundary1 , invisibleBoundary2;
function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  runnerImage = loadAnimation("Runner-1.png" , "Runner-2.png");
  bombImage = loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,400)
  path.addImage(pathImage)
  path.velocityY=2;

  runner = createSprite(200,350,20,20)
  runner.addAnimation("runner",runnerImage)
  runner.scale=0.05;
  runner.x=200;

  invisbleBoundary1 = createSprite(60,200,20,400)
  invisbleBoundary1.visible=false;

  invisibleBoundary2 = createSprite(340,200,20,400)
  invisibleBoundary2.visible=false;
}

function draw() {
  background(220);

if(path.y>400){
 path.y=path.height/3;
}

if(keyDown("right")){
runner.x=runner.x+3;
}
if(keyDown("left")){
runner.x=runner.x-3
}


runner.collide(invisbleBoundary1)
runner.collide(invisibleBoundary2)




 drawSprites();
}
