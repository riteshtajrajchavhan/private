class Enemy{
    constructor(x,y){
this.body=createSprite(x,y)
this.body.addAnimation("running",enemyImg2);

this.w=createSprite(x,y,30,100);
this.w.visible=false;

this.w2=createSprite(x,y,30,100);
this.w2.visible=false;

this.life =createSprite(-300,y,60,1);

this.angle=createSprite(-300,y,5,1)
 
    }



    
display(){

  if(health.width<10){
    this.body.destroy();
    this.w.destroy();
     this.w2.destroy();
     this.life.destroy();
    this.life.destroy();
    }


    if(player.x<this.body.x-90){
        this.body.velocityX=-5;
        this.angle.width=4;
        if(frameCount % 20 === 0){
            this.body.addAnimation("running",enemyImg2);
            }
    }

    if(player.x>this.body.x+90){
        this.body.velocityX=5;
        this.angle.width=5;
        if(frameCount % 20 === 0){
        this.body.addAnimation("running",enemyImg);
        }
    }


   this.w.x=this.body.x-15;
   this.w.y=this.body.y;

   this.w2.x=this.body.x+15;
   this.w2.y=this.body.y;


   if(player.isTouching(this.w)){
       this.body.velocityX=0;
       }

   if(player.isTouching(this.w2)){
    this.body.velocityX=0;
  }

 

if(this.life.width === 10){
    this.body.destroy();
   this.w.destroy();
    this.w2.destroy();
    this.life.destroy();
   this.life.destroy();
 }


 



// key down space 
  
if(keyDown("space") && once === 5  && player.isTouching(this.body)){
    punch();
    occur=1;
    beat=4;
   if(player.isTouching(this.body)){
        this.life.width=this.life.width-10;
        punchSound.play();
       
if(this.angle.width === 5){
  this.body.velocityX=-100;
}

      
if(this.angle.width === 4){
  this.body.velocityX=100;
}

       }
 
  }// key down space over


  if (p.isPressed){
    if(once === 5  && player.isTouching(this.body)){
      punch();
      occur=1;
      beat=4;
     if(player.isTouching(this.body)){
          this.life.width=this.life.width-10;
          punchSound.play();
         
  if(this.angle.width === 5){
    this.body.velocityX=-100;
  }
  
        
  if(this.angle.width === 4){
    this.body.velocityX=100;
  }
  


         }
   
    }
  }
  

  
  

 Time();
  


this.body.collide(wall);
this.body.collide(wall2);
this.body.collide(wall3);

// enemies attack function

if(this.w.isTouching(player) && beat === 5){
  if(frameCount % 10 === 0){
  this.body.addAnimation("running",enemyBeat2);
  health.width=health.width-10;
  enemySound.play();
  
  }
}

if(this.w2.isTouching(player) && beat === 5){
  if(frameCount % 10 === 0){
    this.body.addAnimation("running",enemyBeat);
    health.width=health.width-10;
    enemySound.play();
   
    }
}


// enemies attack function over


}
}

 
function Time(){
  if(occur === 1){
    time=time+1;
    if(time === 10){
  
      if(angle === 5){
        player.addAnimation("running",playerImg);
        }
  
      if(angle === 4){
      player.addAnimation("running",playerImg2);
      }
  
      time=1;
      occur=2;
      once=5;
      beat=5;
    }
  }
}

