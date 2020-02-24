var car,database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    car = createSprite(250,250,10,10);
    car.shapeColor = "red";
    var car1position = database.ref('ball/position');
    car1position.on("value",readposition,showerror); 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function writeposition(x,y){
    database.ref('ball/position').set({
    'x':position.x + x,
    'y':position.y + y
    })
}
function readposition (data){
    position = data.val();
    car.x = position.x;
    car.y = position.y;
}
function showerror(){
    console.log ("ERROR");
}