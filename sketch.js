var garden , gardenImg;
var cat , catImg , catImg2;
var mouse , mouseImg , mouseImg2;


function preload() {
    gardenImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    cat2Img = loadAnimation("images/cat2.png,images/cat3.png");
    mouse2Img = loadAnimation("images/mouse2.png,images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(870,600);
   cat.addAnimation("catSit",catImg);
   cat.scale = 0.2;

   mouse = createSprite(870,600);
   mouse.addAnimation("mouseSit",mouseImg);
   mouse.scale = 0.1;
}

function draw() {

    background(garden);           
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
   {
    cat.velocityX = 0;
    cat.x = 300;
    cat.scale = 0.2;
    cat.addAnimation("catRun",catImg2);
    cat.changeAnimation("catRun",catImg2);

    mouse.scale = 0.1;
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing",mouseImg2);
    } 

    keyPressed();

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW)
  {
    cat.velocityX = -5;
    cat.addAnimation("catRun",catImg2);
    cat.changeAnimation("catRun");

    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
  }

  if(keyCode === RIGHT_ARROW)
  {
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }
 
}
