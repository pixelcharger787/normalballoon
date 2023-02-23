var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var building,buildingImg
var bird,birdImg
var lamp,lampImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

buildingImg = loadImage("assets/obsBottom1.png")
birdImg = loadImage("assets/obsTop2.png")
lampImg = loadImage("assets/obsBottom2.png")

}


function setup(){

createCanvas(900,700)

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);       
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;





}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump

          if(keyDown("space")) {
            balloon.velocityY = -10 ;
            
          }

        
          //adding gravity
           balloon.velocityY = balloon.velocityY + 1;
   
        drawSprites();
        
}