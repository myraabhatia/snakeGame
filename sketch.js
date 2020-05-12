var snake;

function setup() {
  createCanvas(800,400);
  food = createSprite(50,50,20,20)
    snake = createSprite(200,200,20,20);
    
}

function draw() {
  background(0);  
  if(keyCode===(RIGHT_ARROW)){
  snake.velocityX = 2;
  snake.velocityY = 0;
  }

  if(keyCode===(LEFT_ARROW)){
    snake.velocityX = -2;
    snake.velocityY = 0;
    }

    if(keyCode===(UP_ARROW)){
      snake.velocityY = -2;
      snake.velocityX = 0;
      }

      if(keyCode===(DOWN_ARROW)){
        snake.velocityY = 2;
        snake.velocitX = 0;
        }
        if(snake.isTouching(food)){
          food.destroy();
  createSprite(300,300,20,20)  
  
        }

      
  drawSprites();
}