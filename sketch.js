const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var ground;
var ball; 
var wallup;
var wallleft;
var wallright;
var botonarriba;
var botonderecha;
function setup(){
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    botonderecha = createImage("flecha derecha.jpg");
    botonderecha.position(230,45);
    botonderecha.size(45,45);
    botonderecha.mouseClicked(derecha);
    botonarriba = createImage("flecha arriba.jpg");
    
var balloptions = {
    restitution:0.90
}
ball = Bodies.circle(220,115,25,balloptions);
World.add(world,ball);
//rectMode(CENTER);
ellipseMode(RADIUS);
}
function draw(){
    background(21);
    ellipse(ball.position.x,ball.position.y,25);
    Engine.update(engine);

    
}

function derecha(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function arriba(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5});
}