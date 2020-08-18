const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world;
var box1, pig1,score=0;
var backgroundImg,platform,gameState;
var bg="sprites/bg.png";
var backGroundImage;

function preload() {
    getBackgroundimage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    gameState="onsling";



    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    slingShot= new SlingShot(bird.body,{x:200,y:50});

}

function draw(){
    if(backGroundImage)
        background(backGroundImage);
    textSize(35);
    fill("white");
    text("score="+ score,300,50);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    bird.display();
    slingShot.display();
    platform.display();
}

function mouseDragged() {
    if(gameState=="onsling"){
    Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased() {
    slingShot.fly();
    gameState="launched";
}

function keyPressed() {
    if(keyCode===32){
        bird.trajectory=[];
        Body.setPosition(bird.body,{x:200,y:50})
        slingShot.attach(bird.body);
        gameState="onsling"
    }
}

async function getBackgroundimage(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if(hour>=06&&hour<=18){
        bg="sprites/bg.png"
    }
    else{
        bg="sprites/bg2.png"
    }
    backGroundImage=loadImage(bg);
    
}