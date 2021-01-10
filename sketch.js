const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(100, 200, 50, 50, 180, 30, 47);
    box2 = new Box(120, 250, 50, 50, 69, 40, 50);
    ground = new Ground(200, 390, 400, 20);

}

function draw(){
    background(0);
    Engine.update(engine);

    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
    
    fill("blue");
    box1.display();
    fill("yellow");
    box2.display();
    ground.display();
}