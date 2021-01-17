var monkey , monkey_running;

var banana ,bananaImage, obstacle, obstacleImage;

var FoodGroup, obstacleGroup;

var score;


function preload(){
  
monkey_running = 
  
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",  "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png",  "sprite_7.png","sprite_8.png");
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png"); 
}

function setup() {
  createCanvas(500,380);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -6;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
}

function draw() {
  background("cyan");
 
  spawnBanana();
  spawnObstacles();
  
  monkey.collide(ground);
  
  var survivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  
  if(keyDown("space")&& monkey.y >= 314) {
    monkey.velocityY = -17;
}
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(ground.x < 0){
    ground.x = ground.width/2;
}
  drawSprites();
}

function spawnBanana(){
  if(World.frameCount % 150 === 0){
    banana = createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    
    banana.y = Math.round(random(120,200));
    
    banana.velocityX = -6;
    banana.lifetime = 100;
  }
}

function spawnObstacles(){
  if(World.frameCount % 300 === 0){
    obstacle = createSprite(400,317,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.175;
    
    obstacle.velocityX = -6;
    obstacle.lifetime = 100;
  }
}


