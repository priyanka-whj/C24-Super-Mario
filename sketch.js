var platform, platformGroup;
var mario;
var wall;
var obstacle;
var groundImage, marioImage, wallImage, obstacleImage;

function preload()
{
  groundImage = loadImage("images/ground.png");
  marioImage = loadAnimation("images/Capture1.png", "images/Capture3.png", "images/Capture4.png");
  wallImage = loadImage("images/wall.png");
  obstacleImage = loadImage("images/obstacle1.png")
}

function setup() 
{
  createCanvas(displayWidth, 700);

  var xPosition = 0;
  var gap;

  mario = new Player();
  platformGroup = new Group();

  for(i=0; i<40; i++)
  {
    platform = new Platform(xPosition);
    gap = random(80, 120);
    xPosition = xPosition + platform.sptW + gap;
    platformGroup.add(platform.spt);

    if(i%2 === 0)
    {
      wall = new Wall(xPosition);
      platformGroup.add(wall.spt);
    }
    if(i%4 === 0)
    {
      obstacle = new Obstacle(xPosition);
    }
  }
}

function draw() 
{
  background('skyblue');  

  translate(-mario.spt.x + width/2, 0);
  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if(keyDown("left"))
  {
    mario.moveLeft();
  }
  if(keyDown("right"))
  {
    mario.moveRight();
  }
  if(keyDown("up") && mario.spt.velocityY === 0)
  {
    mario.jump();
  }
  drawSprites();
}














