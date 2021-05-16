let gui;
let r;

var time = 1;
var angle = 5;
var once = 5;
var occur = 2;
var touch = 5;
var beat = 5;

var gameState = "start";
var level1 = 0;



function preload(){
playerImg=loadAnimation("image/player.png","image/player-frame2.png","image/playerImg-3.png","image/player4.png");
playerImg2=loadAnimation("image/dan.png","image/lplayer-frame2.png","image/lplayerImg-3.png","image/lplayer4.png");
rightImg=loadImage("image/right.png");
groundImg=loadImage("image/ground.jpg");
groundImg2=loadImage("image/ground2.jpg");
colliderImg=loadImage("image/collider.jpg");
waterImg=loadImage("image/water.png");
woodImg=loadImage("image/wood.png");
treeImg=loadImage("image/tree.png");
beatImg=loadImage("image/beat1.png");
beatImg3=loadImage("image/punch.png");
beatImg2=loadImage("image/lbeat1.png");
beatImg4=loadImage("image/lpunch.png");
enemyImg=loadAnimation("image/enemy.png","image/enemy2.png","image/enemy4.png","image/enemy3.png");
enemyImg2=loadAnimation("image/lenemy.png","image/lenemy2.png","image/lenemy4.png","image/lenemy3.png");
punchSound=loadSound("sound/PUNCH.mp3");
enemySound=loadSound("sound/enemyPUNCH.mp3");
song=loadSound("sound/song.mp3");
jumpSound=loadSound("sound/Woosh.mp3");
enemyBeat=loadAnimation("image/enemy4.png","image/enemyPunch.png","image/enemyPunch.png");
enemyBeat2=loadAnimation("image/lenemy4.png","image/enemyPunch2.png","image/enemy4.png");
spikeImg=loadImage("image/spike.png");
obstacleImg=loadImage("image/obstacle.jpg");
BeamImg=loadImage("image/Beam.png");
leftImg=loadImage("image/left.png");
punchImg=loadImage("image/punchButton.png");
jumpImg=loadImage("image/jump.png");
birdImg=loadAnimation("image/bird.png","image/birdframe2.png");
birdImg2=loadAnimation("image/bird3.png","image/birdframe4.png");
ballImg=loadImage("image/ball.png");
menuImg=loadImage("image/menu.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  gui = createGui();

   r = createButton("Button",windowWidth/2-280,windowHeight/2+120, 70, 70);
   l = createButton("Button",windowWidth/2-380,windowHeight/2+120, 70, 70);
   p = createButton("Button",windowWidth/2+310,windowHeight/2+120, 70, 70);
   j = createButton("Button",windowWidth/2+220,windowHeight/2+120, 70, 70);

   levelbutton1 = createButton("Button",windowWidth/2-80,windowHeight/2+100, 150, 70);

   hide=createSprite(windowWidth/2,windowHeight/2,1000,600);
   hide.shapeColor="lightblue"
   hide.visible=false;

   menu=createSprite(windowWidth/2,windowHeight/2);
   menu.addImage(menuImg);
   menu.scale=1.6;

   // creating js object

   fgroup = createGroup();

song.loop();

}

function draw() {
  background("lightblue");
   drawGui();
   drawSprites();
 
if(gameState === "start"){

  camera.x=menu.x;
  camera.y=menu.y;

r.visible=false;
l.visible=false;
p.visible=false;
j.visible=false;

hide.visible=false;
menu.visible=true;


if (levelbutton1.isHeld){



  hide.visible=true;

  t1 = new Tree(windowWidth/2,windowHeight/2-80,2.3);
   t2 = new Tree(windowWidth/2+2060,windowHeight/2-80,2.3);
   t3 = new Tree(windowWidth/2+2660,windowHeight/2-80,2.3);
   t4 = new Tree(windowWidth/2+4680,windowHeight/2-80,2.3);
  
   c1 = new collider(windowWidth/2-420,windowHeight/2,0.3)
  
   g1 = new Ground(windowWidth/2+26,windowHeight/2+180,0.3);
   g2 = new Ground2(windowWidth/2+2350,windowHeight/2+180,0.3);
   g3 = new Ground(windowWidth/2+4676,windowHeight/2+180,0.3);
   
   w1 = new Water(windowWidth/2+1035,windowHeight/2+150,1.1);
   w2 = new Water(windowWidth/2+3668,windowHeight/2+150,1.1);
  
   wg1 = new Wood(windowWidth/2+755,windowHeight/2,1.1);
   wg2 = new Wood(windowWidth/2+1205,windowHeight/2,1.1);
   
  
   ob1 = new Obstacle(windowWidth/2+2650,windowHeight/2+15,windowWidth/2+2650,windowHeight/2-285);
   ob2 = new Obstacle(windowWidth/2+2850,windowHeight/2,windowWidth/2+2850,windowHeight/2-279);
  
  e1 = new Enemy(windowWidth/2+400,windowHeight/2);
  e2 = new Enemy(windowWidth/2-300,windowHeight/2);
  e3 = new Enemy(windowWidth/2-200,windowHeight/2);
  e4 = new Enemy(windowWidth/2+200,windowHeight/2);
  e5 = new Enemy(windowWidth/2+2000,windowHeight/2);
  e6 = new Enemy(windowWidth/2+2300,windowHeight/2);
  e7 = new Enemy(windowWidth/2+1900,windowHeight/2);
  e8 = new Enemy(windowWidth/2+2100,windowHeight/2);
  
  bird1 = new Bird(windowWidth/2+4400,windowHeight/2-150);
  bird2 = new Bird(windowWidth/2+4700,windowHeight/2-150);
  
  // simple objects
  
   player=createSprite(windowWidth/2-100,windowHeight/2);
   player.addAnimation("running",playerImg);
    
  health=createSprite(windowWidth/2-380,windowHeight/2-300,110,20);
  health.shapeColor="lawngreen";
  
  
wall=createSprite(windowWidth/2+400,windowHeight/2,10,700);
wall.visible=false;

wall2=createSprite(windowWidth/2+1650,windowHeight/2,10,700);
wall2.visible=false;


wall3=createSprite(windowWidth/2+2500,windowHeight/2,10,700);
wall3.visible=false;

wall4=createSprite(windowWidth/2+5050,windowHeight/2,20,700);
wall4.visible=false;

  b1=createSprite(windowWidth/2+3500,windowHeight/2);
  b1.addImage(BeamImg);
  b1.scale=0.5;
  b1.velocityX=4;
  fgroup.add(b1);
  
  b2=createSprite(windowWidth/2+4100,windowHeight/2);
  b2.addImage(BeamImg);
  b2.scale=0.5;
  b2.velocityX=4;
  fgroup.add(b2);
  
  rightbutton=createSprite(windowWidth/2-250,windowHeight/2+120);
rightbutton.addImage(rightImg);
rightbutton.scale=0.3;

leftbutton=createSprite(windowWidth/2-350,windowHeight/2+120);
leftbutton.addImage(leftImg);
leftbutton.scale=0.3;

punchButton=createSprite(windowWidth/2+350,windowHeight/2+120);
punchButton.addImage(punchImg);
punchButton.scale=0.240;

jumpButton=createSprite(windowWidth/2+250,windowHeight/2+120)
jumpButton.addImage(jumpImg);
jumpButton.scale=0.3;


gameState=level1;

}
  
}//start end 

   else if(gameState === level1){

 // gui start

 r.visible=true;
l.visible=true;
p.visible=true;
j.visible=true;

menu.visible=false;
 
 if (r.isHeld){
  angle=5;
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
 
    player.x=player.x+15;
    angle=5;
   
  
   }

   if (l.isHeld){
    angle=4;
    if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg2);
   }
 
      player.x=player.x-10;
      angle=4;
   
  
       
     
   }
 
   

 // gui end 
 
player.velocityY=player.velocityY+2.0;

if(player.x>windowWidth/2-18){
camera.x=player.x;
health.x=player.x-340;
rightbutton.x=player.x-250;
leftbutton.x=player.x-350;
punchButton.x=player.x+350;
jumpButton.x=player.x+250;
}



player.velocityX=0;

if (keyDown(RIGHT_ARROW)) {
  player.x=player.x+15;
  angle=5;
  
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
}
     
 if (keyDown(LEFT_ARROW)) {
 player.x=player.x-10;
 angle=4;
 
 if(frameCount % 16 === 0){
 player.addAnimation("running",playerImg2);
}
  } 

  
if (keyDown(RIGHT_ARROW)) {
 angle=5;
  if(frameCount % 16 === 0){
    player.addAnimation("running",playerImg);
   }
}
     
 if (keyDown(LEFT_ARROW)) {
 angle=4;
 if(frameCount % 16 === 0){
 player.addAnimation("running",playerImg2);
}
  } 
 
  

  if(b1.x>windowWidth/2+3700){
    b1.velocityX=-4;
  }

  if(b1.x<windowWidth/2+3400){
    b1.velocityX=4;
  }


  if(b2.x>windowWidth/2+4100){
    b2.velocityX=-4;
  }

  if(b2.x<windowWidth/2+3900){
    b2.velocityX=4;
  }


  
  for(var f = 0; f < fgroup.length; f++){
    if(fgroup.get(f).isTouching(player)){
     player.collide(fgroup);
    if(keyDown(UP_ARROW)){
           player.velocityY=-29;
            }
 if (j.isHeld){
   player.velocityY=-29;
  }
 }
     } 


    


     if(player.isTouching(wall2)){
      wall2.x=windowWidth/2+1649;
    }
    
    if(wall2.x === windowWidth/2+1649){
      e5.display();
      e6.display();
      e7.display();
     e8.display();
    }

    if(player.isTouching(wall4)){
      health.width=5;
    }
    
if(health.width<10){
  gameState="start";

player.destroy();
health.destroy();
wall.destroy();
wall2.destroy();
wall3.destroy();
b1.destroy();
b2.destroy();
rightbutton.destroy();
leftbutton.destroy();
punchButton.destroy();
jumpButton.destroy();

e5.display();
e6.display();
e7.display();
e8.display();

}


  //display the object

  t1.display();
  t2.display();
  t3.display();
  t4.display();

 g1.display();
 g2.display();
 g3.display();

 w1.display();
 w2.display();
 
 ob1.display();
 ob2.display();

 c1.display();

 wg1.display();
 wg2.display();

e1.display();
e2.display();
e3.display();
e4.display();

bird1.display(windowWidth/2+4300,windowWidth/2+5000);
bird2.display(windowWidth/2+4300,windowWidth/2+5000);

}//level1 end



}



function punch(){

  once=4;
  once2=4;

  
    if(angle === 5){
  
  
    rand = Math.round(random(1,2));
    switch(rand) {
      case 1: player.addAnimation("running",beatImg);
              break;
      case 2:  player.addAnimation("running",beatImg3);
              break;
      default: break;
    }
   }
  
   if(angle === 4){
    rand = Math.round(random(1,2));
    switch(rand) {
      case 1: player.addAnimation("running",beatImg2);
              break;
      case 2:  player.addAnimation("running",beatImg4);
              break;
      default: break;
    }
   }

  
  
  }


 
  

function touchMoved() {
  // do some stuff
  return false;
}










