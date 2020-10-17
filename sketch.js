var movingRect,rect;
function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 800, 80, 30);
  rect = createSprite(400,100,50,80);
  movingRect.shapeColor = "green";
  rect.shapeColor = "green";
  movingRect.debug = true;
  rect.debug = true;
  movingRect.velocityY = -5
  rect.velocityY = 5
}

function draw() {
  background(255,255,255);
  movingRect.y = mouseY;
  movingRect.x = mouseX;
  //if (movingRect.x - rect.x < movingRect.width/2 + rect.width/2 && rect.x - movingRect.x < rect.width/2 +movingRect.width/2 && 
    //movingRect.y - rect.y < movingRect.height/2 + rect.height/2 && rect.y - movingRect.y < rect.height/2 + movingRect.height/2){
    //movingRect.shapeColor = "red";
    //rect.shapeColor = "red";
  //}
  //else{
    //movingRect.shapeColor = "green";
    //rect.shapeColor = "green"
  //}
  if(movingRect.x - rect.x < movingRect.width/2 + rect.width/2 && rect.x - movingRect.x < rect.width/2 +movingRect.width/2){
    movingRect.velocityX = movingRect.velocityX * (-1);
    rect.velocityX = rect.velocityX * (-1);
  }
  if(movingRect.y - rect.y < movingRect.height/2 + rect.height/2&& rect.y - movingRect.y < rect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    rect.velocityY = rect.velocityY * (-1);
  }
  drawSprites();
}