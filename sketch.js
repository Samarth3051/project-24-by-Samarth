const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone,stone2,stone3;
var iron,iron2,iron3,iron4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(100,100,60,40);
    stone2 = new Stone(810,260,300,50);
    stone3 = new Stone(810,100,300,50);
    rubber = new Rubber(250.100,40,40,20);
    iron = new Iron(500,100,80,30);
    iron2 = new Iron(700,200,40,90);
    iron3 = new Iron(810,100,40,90);
    iron4 = new Iron(900,150,40,90);
    
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    stone2.display();
    stone3.display();
    rubber.display();
    iron.display();
    iron2.display();
    iron3.display();
    iron4.display();
    
   
    
 
}