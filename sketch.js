var ball,database;
var position,ballposition;
function setup(){
    createCanvas(400,400);
    database=firebase.database()
    ball=createSprite(200,200,30,30);
    ball.shapecolor=("pink")
    ballposition=database.ref("ball/position")
    ballposition.on("value",readPosition)
}
function draw(){
    background("yellow")
    if(position!==undefined){
    if(keyDown("UP")){
        writePosition(0,-2)
    }
    if(keyDown("DOWN")){
        writePosition(0,2)
    }
    if(keyDown("LEFT")){
        writePosition(-2,0)
    }
    if(keyDown("RIGHT")){
        writePosition(2,0)
    }
}
    drawSprites();
}
function readPosition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}
function writePosition(x,y){
    database.ref("ball/position").set({
      "x":position.x+x,
      "y":position.y+y
    })
   
}