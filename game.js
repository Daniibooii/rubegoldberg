/*********************************************************
**	Here we have the functionality to load our entities **
** 								UNDER CONSTRUCTION										**
**********************************************************/


let selected = "circle";

// Importing Matter.js
let Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies;

let engine;
let boxes = [];
let circles = [];
let world;
let options = {
	isStatic: true
}

function setup() {
	//TODO: Add some sort of level system
	//Draw the area our game will be played then center
	let cnv = createCanvas(1120, 640);
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	cnv.position(x, y);

	//Create our physics engine
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	let ground = Bodies.rectangle(560, height, width, 30, options);
	World.add(world, ground);
}

function mouseDragged() {
	// TODO: Revise this function and conditional to better suite our game. Possibly think of way around conditional statement
	//Here we are using our constructor to add new boxes. see entities.js
	if (selected === "box") {
		boxes.push(new AddBox(mouseX, mouseY, (random(16) * 8), (random(16) * 8)));
	} else if (selected === "circle") {
		circles.push(new AddCircle(mouseX, mouseY, random(64)))
	} else {
		console.log("nothing selected");
	}

}

function draw() {
	// TODO: Remove for loops and use map to draw all of our entities
	// Here is where all of our rendering goes down
	background(187);
	for (var i = 0; i < circles.length; i++) {
		circles[i].show();
	}
	// let drawCircles = circles.map(()=>{
	// 	this.show});

	for (var i = 0; i < boxes.length; i++) {
		boxes[i].show();
	}
	//Ground
	push();
	rectMode(CENTER); // Mode center set
	rect(560, height, width, 30);
	fill(100);
	pop();

}
