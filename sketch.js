var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;

var treasureCollection = 0;
var GoldCollection = 0;

var cashG,diamondsG,jwelleryG,swordGroup;
var goldCoin,goldCoinBundle;
var goldCoinGroup,goldCoinBundleGroup;
var goldCoinImg,goldCoinBundleImg;
 
var gameOver,gameOverImg;


//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");

  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");

  swordImg = loadImage("sword.png");
 // endImg =loadAnimation("gameOver.png");

 goldCoinImg = loadImage("goldCoin.png");
 goldCoinBundleImg = loadImage("goldCoin2.png");

 gameOverImg = loadImage("gameOver.png");

}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale = 0.1;

gameOver = createSprite(200,292);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5; 
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
goldCoinGroup = new Group();
goldCoinBundleGroup = new Group();

}

function draw() {

  if(gameState===PLAY){

 gameOver.visible = false;

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createGold();
    createGoldBundle();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection+80
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection+100
      
    }
     else if (goldCoinGroup.isTouching(boy)) {
       goldCoinGroup.destroyEach();
       GoldCollection = GoldCollection+1
     }
      else if (goldCoinBundleGroup.isTouching(boy)) {
      goldCoinBundleGroup.destroyEach();
      GoldCollection = GoldCollection+5
   }
    else{

      if(swordGroup.isTouching(boy)) {

     gameOver.visible = true;
     gameState = END
     boy.x = 200;
     boy.y = 300;

     cashG.destroyEach();
     cashG.setVelocityYEach(0);

     diamondsG.destroyEach();
     diamondsG.setVelocityYEach(0);

     jwelleryG.destroyEach();
     jwelleryG.setVelocityYEach(0);

     goldCoinGroup.destroyEach();
     goldCoinGroup.setVelocityYEach(0);

     goldCoinBundleGroup.destroyEach();
     goldCoinBundleGroup.setVelocityYEach(0);

     swordGroup.destroyEach();
     swordGroup.setVelocityYEach(0);
    }
  }
  
  drawSprites();
  textSize(20);
  fill("yellow");
  text("Treasure: "+ treasureCollection,8,22);
 // text(mouseX+","+mouseY,mouseX,mouseY);
  text("GoldCollected: "+ GoldCollection,8,47)
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

 function createGold (){

 if (World.frameCount % 600 === 0) {

 var goldCoin = createSprite(Math.round(random(50,30),40,10,10))
 goldCoin.addImage(goldCoinImg);
 goldCoin.scale = 0.5;
 goldCoin.velocityY = 3;
 goldCoin.lifetime = 150;
 goldCoinGroup.add(goldCoin);
  }
}

function createGoldBundle () {

if (World.frameCount % 650 === 0) {

 var goldCoinBundle = createSprite(Math.round(random(50,30),40,10,10))
 goldCoinBundle.addImage(goldCoinBundleImg);
 goldCoinBundle.scale = 0.3;
 goldCoinBundle.velocityY = 3;
 goldCoinBundle.lifetime = 150;
 goldCoinBundleGroup.add(goldCoinBundle);
  }
}