var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;
var garden, gardenImg;


function preload() {
  catImg = loadImage("images/cat1.png");  
  mouseImg =  loadImage("images/mouse1.png");
  catImg1 = loadAnimation("images/cat2.png", "images/cat3.png");
  catImg2 = loadImage("images/cat4.png");
  mouseImg1 = loadAnimation("images/mouse2.png", "images/mouse3.png");
  mouseImg2 = loadImage("images/mouse4.png");
  gardenImg = loadImage("images/garden.png");  
}
function setup(){
  createCanvas(1000,800);

  garden = createSprite(500,400,1000,40);
  garden.addImage(gardenImg);

  mouse = createSprite(200,650,40,40);
  mouse.addImage("Jerry",mouseImg);
  mouse.scale = 0.1;  
  
  cat = createSprite(850,650,40,40);
  cat.addImage("Tom",catImg);
  cat.scale = 0.15;

  
  
}

function draw() {
  background(255);

    

  if(cat.x - mouse.x < cat.width/4 + mouse.width/4){
    cat.addImage("collided",catImg2)
    cat.changeImage("collided",catImg2);
    cat.velocityX = 0;

    mouse.addImage("detective",mouseImg2);
    mouse.changeImage("detective",mouseImg2);
    mouse.velocityX = 0;

  }

    cat.setCollider("circle",0 ,0,400);
    mouse.setCollider("circle",0,0,400); 

    

  drawSprites();
}


function keyPressed(){
  if(keyDown("left")){
    mouse.addAnimation("mouseTeasing",mouseImg1);
    mouse.changeAnimation("mouseTeasing",mouseImg1);
    mouse.frameDelay = 25;
  }

  if(keyDown("left")){
    cat.addAnimation("catChasing",catImg1);
    cat.changeAnimation("catChasing",catImg1);
    cat.velocityX = -3;
  }

 
}
