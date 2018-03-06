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
	
	game.content.main(); // draws our canvas
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground = Bodies.rectangle(560, height, width, 30, options);
	sideBoundry = Bodies.rectangle(960, 560, 320, height, options);
	World.add(world, [ground, sideBoundry]);

}

function mouseClicked() {
	// TODO: Revise this function and conditional to better suite our game. Possibly think of way around conditional statement
	//Here we are using our constructor to add new boxes. see entities.js
	if (selected === "box") {
		boxes.push(new AddBox(mouseX, mouseY, (random(16) * 8), (random(16) * 8)));
	} else if (selected === "circle") {
		circles.push(new AddCircle(mouseX, mouseY, random(64)))
	} else if (selected === "polygon") {
	polygons.push(new AddPolygon(mouseX, mouseY, (3), (16)));
	}
	else {
		console.log("nothing selected");
	}

}

function draw() {
	// TODO: Remove for loops and use map to draw all of our entities
	// Here is where all of our rendering goes down
	background(187);
	for (let i = 0; i < circles.length; i++) {
		let e = circles[i];
		e.show();
		if(e.houdini()){
			e.del();
			circles.splice(i, 1);
			i--;
		}
	}
	// let drawCircles = circles.map(()=>{
	// 	this.show});

	for (let i = 0; i < boxes.length; i++) {
		let e = boxes[i];
		e.show();
		if(e.houdini()){
			e.del();
			boxes.splice(i, 1);
			i--;
		}
	}
	
	for (var i = 0; i < polygons.length; i++) {
   		let e = polygons[i];
		e.show();
		if(e.houdini()){
			e.del();
			polygons.splice(i, 1);
			i--;
  		}
	}
	//Ground
	// ground.push();
	game.content.side();
	game.level.one();
	// ground.pop();

}
