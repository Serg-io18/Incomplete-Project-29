const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var shelf1, shelf2;
var ground;
var box1,box2,box3,box4,box5,box6,box7;

function setup() {
    createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    shelf1 = new Shelf(600,400,300,20);
    shelf2 = new Shelf(1000,250,300,20);
    ground = new Shelf(650,590,1300,20);
    box1 = new Box(490,350,50,75);
    box2 = new Box(545,350,50,75);
    box3 = new Box(600,350,50,75);
    box4 = new Box(655,350,50,75);
    box5 = new Box(710,350,50,75);
}

function draw() {
    background(230);
    shelf1.display();
    shelf2.display();
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
}
