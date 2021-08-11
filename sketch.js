const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;
var stadium
var redplayer1,redplayer2
var blueplayer1,blueplayer2,blueplayer1image,redplayer1image

function preload(){

	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("cricketball.png");
	stadium=loadImage("cricketstadiumbackground.jpg")
	blueplayer1image=loadImage("cricketplayer1.png")
	redplayer1image=loadImage("cricketplayer2.png")



}


function setup() {
	createCanvas(1600, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.1,
		density:0.4
	}

	ball = Bodies.circle(280,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	redplayer1 = new Ground(1230,400,10,120);
	redplayer2 = new Ground(1200,470,120,10);

	blueplayer1 = new Ground(320,460,130,10);
	blueplayer2 = new Ground(240,400,10,110);

	Engine.run(engine);
  
}


function draw() {
	background(stadium);
	rectMode(CENTER);


	ground.display();
	redplayer1.display();  
	redplayer2.display();  
	blueplayer1.display();  
	blueplayer2.display(); 
	
textSize(40)
	stroke("green")
	strokeWeight(4);
			fill("red")
	text("play catch - catch",600,100)
	

	
	
	ellipse(ball.position.x,ball.position.y,radius,radius);
	image(paperImg,ball.position.x-45,ball.position.y-40,radius+20,radius+30);


	
	
image(redplayer1image, 100, 300, 400,400);
image(blueplayer1image, 1000, 300, 400,400);
	

	



}

function keyPressed() {
  	if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:43,y:-55});
    
  	}

	  if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:-43,y:-55});
	
	  }
}


