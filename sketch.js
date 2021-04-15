var ball;
var position, database;
var bgImage, backImage;
function preload(){
    bgImage = loadImage("Hot Air Ballon-01.png");
    hotImage = loadAnimation("Hot Air Ballon-02.png", "Hot Air Ballon-03.png", "Hot Air Ballon-04.png");
}

function setup(){
    createCanvas(1300, 880);
    backImage = createSprite(50, 50, canvas.weidth, canvas.height);
    backImage.addImage(bgImage);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.addAnimation("moving", hotImage);
    var vanshika = database.ref('ball')
    vanshika.on("value", aadi)
}

function draw(){
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball').set({
        'x':position.x+x, 
        'y':position.y+y
    })
}
function aadi(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}