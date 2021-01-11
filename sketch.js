
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(740, 500)
  
  monkey = createSprite(100, 350, 50, 50)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.2
  
  ground = createSprite(270, 430, 1500, 20)
  ground.velocityX = -8
  
  bananaGroup = new Group()
  obstacleGroup = new Group()
  
  survivaltime = 0
}


function draw() {
  background("green")
  
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime = Math.round(frameCount/frameRate())
  text("Survival Time: " + survivaltime, 500, 50)
  
  if (ground.x < 0) {
    ground.x = ground.width/2
  }
  
  if (keyDown("space") && monkey.y >= 300 ) {
    monkey.velocityY = -15
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)

  createobstacle()
  createbanana()
  drawSprites()
  
 
}

function createbanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(740, Math.round(random(120, 200)))
    banana.addImage(bananaImage)
    banana.scale = 0.2
    banana.velocityX = -8
    banana.lifetime = 150
    bananaGroup.add(banana)
  }
}

function createobstacle() {
  if (frameCount % 300 === 0 ) {
    obstacle = createSprite(740, 390)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.20
    obstacle.velocityX = -8
    obstacleGroup.add(obstacle)
  }
}






