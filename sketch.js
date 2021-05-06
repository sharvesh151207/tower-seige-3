const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,block1,ground1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20,block21,polygon,slingShot;
var score = 0;
function preload() {

}

function setup(){
    var canvas = createCanvas(950,700);
    engine = Engine.create();
    world = engine.world;
 ground1 = new Ground(475,690,950,20);
 ground = new Ground(500,400,200,10);
 block1 = new Box(430,390,20,30);
 block2 = new Box(450,390,20,30);
 block3 = new Box(470,390,20,30);
 block4 = new Box(490,390,20,30);
 block5 = new Box(510,390,20,30);
 block6 = new Box(530,390,20,30);
 block7 = new Box(550,390,20,30);
 block8 = new Box(570,390,20,30);
 block9 = new Box(450,370,20,30);
 block10 = new Box(470,370,20,30);
 block11 = new Box(490,370,20,30);
 block12 = new Box(510,370,20,30);
 block13 = new Box(530,370,20,30);
 block14 = new Box(550,370,20,30);
 block15 = new Box(470,350,20,30);
 block16 = new Box(490,350,20,30);
 block17 = new Box(510,350,20,30);
 block18 = new Box(530,350,20,30);
 block19 = new Box(490,330,20,30);
 block20 = new Box(510,330,20,30);
 block21 = new Box(500,310,20,30);
 polygon = new Hero(100,350,30,30);
World.add(world,polygon);
slingShot = new SlingShot(polygon.body,{x:100,y:300});


}

function draw(){
    background("grey");
      noStroke();
        textSize(35)
        fill("white")
    text("SCORE:"+ score, 750, 40);
    Engine.update(engine);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    polygon.display();
    slingShot.display();
    ground1.display();  
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
}
function mouseDragged(){

Matter.Body.setPosition(polygon.body,{x: mouseX,y: mouseY});

};

function mouseReleased(){
    slingShot.fly();
};
 
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body,{x:100,y:300})
      slingShot.attach(polygon.body)
    };
};

