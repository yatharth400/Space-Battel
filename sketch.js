var missile,background,spaceship,rocket,blast
var missileImg,backgroundImg,spaceshipImg,rocketImg
var missileGroup,spaceshipGroup
var life = 5
var score = 0
var gameState = 1

function preload(){
backgroundImg= loadImage("background.jpg")
rocketImg = loadImage("rocket.png")
missileImg = loadImage("missile.png")
spaceshipImg = loadImage("spaceship.png")
blastImg = loadImage("blast.png")


}


function setup() {
  createCanvas(windowWidth,windowHeight);
rocket = createSprite(width/2,550,50)
rocket.addImage(rocketImg)
rocket.scale=0.2

spaceshipGroup = createGroup()
missileGroup = createGroup()

}

function draw() {
  background(backgroundImg); 
  


  textSize(40)
 fill ("black")
  text("Life:"+life,width-130,50) 


  textSize(40)
 fill ("black")
  text("Score:"+score,width-300,50) 

if(gameState===1){
rocket.x=mouseX 
if(spaceshipGroup.isTouching(missileGroup)){
  for(var i=0;i<spaceshipGroup.lenth;i++){
    if(spaceshipGroup[i].isTouching(missileGroup)){
      spaceshipGroup[i].destroy()
      score+=50
    }
  }

}

if(frameCount%35===0){
  drawspaceship()
}

if(keyDown("space")){
 ShootMissile()
}
drawSprites();
}

function ShootMissile(){
  missile = createSprite(width/2,400,50)
  missile.x= rocket.x-1
missile.addImage(missileImg)
missile.scale=0.05
missile.velocityY =-7
missileGroup.add(missile)
}

function drawspaceship(){
  spaceship = createSprite(random(20,1000),40,40) 
spaceship.addImage(spaceshipImg)
spaceship.scale=0.2
spaceship.velocityY=5
spaceship.lifetime=400
spaceshipGroup.add(spaceship)

}

}
