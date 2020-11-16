var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var survivalTime=0, score=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  }

function draw() {
  background("white");
  
   stroke("black");
    fill("black");
      textSize(20);
  survialTime = Math.ceil(frameCount/frameRate());
  text("Survial Time:"+  survialTime, 100, 50);
  
  stroke("black");
    fill("black");
      textSize(20);
  text("Score:"+  score, 300, 100);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  food();
  stone();
  
drawSprites();  
}
function food(){
  if(frameCount%80 === 0){
     var banana = createSprite(400, 120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
     foodGroup.add(banana);
     }
}
function stone(){
  if(frameCount%300 === 0){
     var obstacle = createSprite(400, 330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
     obstacleGroup.add(obstacle);
}}