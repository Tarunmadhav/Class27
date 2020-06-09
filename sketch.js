const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(300,320,70,70);
    box2 = new Box(520,320,70,70);
    pig1 = new Pig(410, 350);
    log1 = new Log(410,260,300, PI/2);

    box3 = new Box(300,240,70,70);
    box4 = new Box(520,240,70,70);
    pig3 = new Pig(410, 220);

    log3 =  new Log(410,180,300, PI/2);

    box5 = new Box(410,160,70,70);
    log4 = new Log(360,120,150, PI/7);
    log5 = new Log(470,120,150, -PI/7);

    bird = new Bird(100,100);
platform = new Ground(50,305,150,170);
log6=new Log(130,180,80,PI/2);
chain1 = new chain(bird.body,log6.body);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
platform.display();
chain1.display();
log6.display();

}
