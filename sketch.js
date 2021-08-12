var backgroundimg;

var iss, issImage, spacecraft, spacecraftImg, spacecraftImg2, spacecraftImg3, spacecraftImg4;

var hasDocked = false;

function preload(){
backgroundimg = loadImage("spacebg.jpg")
issImage = loadImage("iss.png")

spacecraftImg = loadImage("spacecraft1.png")
spacecraftImg2 = loadImage("spacecraft2.png")
spacecraftImg3 = loadImage("spacecraft3.png")
spacecraftImg4 = loadImage("spacecraft4.png")

}


function setup() {
  createCanvas(800,400);

  iss = createSprite(400,200, 100,100)
  iss.addImage(issImage)
  iss.scale = 0.5

  spacecraft = createSprite(800,400,30,30)


  spacecraft.addImage(spacecraftImg)
  spacecraft.scale = 0.3

}

function draw() {
  background(backgroundimg);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
    
    if (keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraftImg3)
      spacecraft.x = spacecraft.x - 20;
  }
  
  if (keyDown(RIGHT_ARROW)){
    spacecraft.addImage(spacecraftImg4)
    spacecraft.x = spacecraft.x + 20;
}

if (keyDown(DOWN_ARROW)){
  spacecraft.addImage(spacecraftImg2)
}

if (keyDown(UP_ARROW)){
  spacecraft.addImage(spacecraftImg2)
  spacecraft.y = spacecraft.y - 10
}

}
if (spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)) {
hasDocked = true;

textSize(25)
fill("white")
text("Docking Succesful", 200,300)

}

  drawSprites();
}