class Obstacle{
    constructor(x,y,x2,y2){
        this.body=createSprite(x,y);
        this.body.addImage(obstacleImg);
        this.body.scale=0.3;

        this.body2=createSprite(x2,y2);
        this.body2.addImage(obstacleImg);
        this.body2.scale=0.3;

    }

display(){

player.collide(this.body);
player.collide(this.body2)

if(health.width<10){
    this.body.destroy();
    this.body2.destroy();
}


}
  
}