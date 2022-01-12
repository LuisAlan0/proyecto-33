const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base1,base2,base3,base4,base5,base6,base7;
var pared1, pared2, pared3;
var ball, slingshot;
var pino1,pino2,pino3,pino4,pino5,pino6,pino7,pino8,pino9,pino10,pino11,pino12,pino13,pino14,pino15,pino16,pino17,pino18,pino19,pino20,pino21,pino22,pino23, pino24;
var gameState = "inHand"


function preload(){
backgroundImg = loadImage("BG.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ball = new Ball(113,230,12,12);

  slingshot = new Slingshot(ball.body,{x:113,y:230});
  
  //_______Bases y suelo _______________
  base1 = new Base(400,399,800,10);
  base2 = new Base(550,300,90,10);
  base3 = new Base(240,200,50,10);
  base4 = new Base(680,200,190,10);
  base5 = new Base(590,380,55,10);
  base6 = new Base(410,140,150,10);
  base7 = new Base(300,355,200,10);

  pared1 = new Base(340,116,10,40);
  pared2 = new Base(590,166,10,40);
  
  //createSprite(400, 200, 50, 50);
  //____________pinos base2_____________________
  pino1 = new Pinos(545,280,25,50);
  pino2 = new Pinos(550,280,25,50);
  pino3 = new Pinos(555,280,25,50);
  //___________pinos base3______________
  pino4 = new Pinos(230,180,25,50);
  pino5 = new Pinos(255,180,25,50);
  //____________pino base4__________________
  pino6 = new Pinos(665,180,25,50);
  pino7 = new Pinos(670,180,25,50);
  pino8 = new Pinos(685,180,25,50);
  pino9 = new Pinos(690,180,25,50);
  pino10 = new Pinos(705,180,25,50);
  //_______________pino base5_____________________
  pino11 = new Pinos(575,340,25,50);
  pino12 = new Pinos(600,340,25,50);
  //____________pino base6__________________
  pino13 = new Pinos(390,120,25,50);
  pino14 = new Pinos(400,120,25,50);
  pino15 = new Pinos(410,120,25,50);
  pino16 = new Pinos(425,120,25,50);
  pino17 = new Pinos(435,120,25,50);
  //____________pino base7__________________
  pino18 = new Pinos(290,350,25,50);
  pino19 = new Pinos(310,350,25,50);
  pino20 = new Pinos(325,350,25,50);
  pino21 = new Pinos(335,350,25,50);
  pino22 = new Pinos(345,350,25,50);
  pino23 = new Pinos(220,348,25,50);
  pino24 = new Pinos(218,350,25,50);
}

function draw() {
  background(backgroundImg);

  textSize(25)
  fill("black")
  text("Derriba todos los pinos",10,100);
  textSize(15)
  text("preciona la barra espacio",10,140)
  text("para volver a intentar",10,160);
  
  base1.display();
  base2.display();
  base3.display();
  base4.display();
  base5.display();
  base6.display();
  base7.display();
  
  pared1.display();
  pared2.display();
  
  // pared4.display();

  pino1.display();
  pino2.display();
  pino3.display();
  pino4.display();
  pino5.display();
  pino6.display();
  pino7.display();
  pino8.display();
  pino9.display();
  pino10.display();
  pino11.display();
  pino12.display();
  pino12.display();
  pino13.display();
  pino14.display();
  pino15.display();
  pino16.display();
  pino17.display();
  pino18.display();
  pino19.display();
  pino20.display();
  pino21.display();
  pino22.display();
  pino23.display();
  pino24.display();
  ball.display();
  slingshot.display();
  //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(ball.body,{x:113,y:230})
    slingshot.attach(ball.body)
  }
}

function mouseReleased(){
  slingshot.fly();
}