var movingRect, fixedRect ;


function setup() {
  createCanvas(800,400);

   movingRect=createSprite(600,200,80,30); 

   movingRect.shapeColor="green"; 
   fixedRect=createSprite(200,200,50,80);
   fixedRect.shapeColor="green"; 

   movingRect.debug=true; 
   fixedRect.debug=true; 
}

function draw() {
  
  background(0);
   movingRect.x=mouseX; 
   movingRect.y=mouseY; 
   //console.log(movingRect.x-fixedRect.x); 
   console.log(movingRect.y-fixedRect.y);
   
   if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2 && 
     fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2 &&
     movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2 &&
     fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2)
   { 
     movingRect.shapeColor="red"; 
    fixedRect.shapeColor="red"; 
   } 
   else
    { 
     movingRect.shapeColor="green"; 
     fixedRect.shapeColor="green"; 
    } 
    drawSprites();
}