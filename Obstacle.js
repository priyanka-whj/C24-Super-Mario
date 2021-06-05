class Obstacle
{
    constructor(xPos)
    {
        this.sptX = xPos;
        this.sptY = random([150, 250, 350]);
        this.spt = createSprite(this.sptX, this.sptY);
        this.spt.shapeColor = "green";
        this.spt.addImage("obstacle", obstacleImage);
        this.spt.scale = 0.04;
        this.spt.velocityX = -5;
    }
};