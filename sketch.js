var cat, catimg, catAnimation;
var mouse, mouseimg, mouseAnimation;
var forest, forestimg;


function preload() {
    //load the images here
    forestimg = loadImage("garden.png");
    catimg = loadImage("cat1.png");
    catAnimation = loadAnimation("cat2.png","cat3.png");
    mouseimg = loadImage("mouse1.png");
    mouseAnimation = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    forest = createSprite(windowWidth/2, windowHeight/2);
    forest.addImage("forest",forestimg);
    
    cat = createSprite(windowWidth-20, windowHeight+20);
    cat.addImage("cat",catimg);

    mouse = createSprite(windowWidth-80, windowHeight+20);
    mouse.addImage("mouse",mouseimg);
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catAnimation);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouse",mouseAnimation);
  }

}
