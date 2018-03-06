
/*****************************************************************************************
** 							Here we will add constuctors to build our entities 											**
** Expect each constuctor to have a options object, here we will edit matter properties **
** 			Each constructor must have a show method to render the object with P5.js 				**
** Matter renders bodies at the center point P5's default is to render starting top left**
**					Easist work around is setting the mode to CENTER see ln 31 									**
******************************************************************************************/



function AddBox(x, y, w, h) { // Ex. Constructor
	let options = { // Ex. options obj
		// TODO: Add every potential propety + desciption?
		friction: .2,
		restitution: 1
	}
	this.body = Bodies.rectangle(x, y, w, h, options) // See matter.js docs for more bodies
	this.w = w;
	this.h = h;
	this.houdini = () =>{
	let pos = this.body.position;
	let angle = this.body.angle;
	World.add(world, this.body);
		return (pos.y > height + 50);
	}
	this.del = () =>{
		Matter.Composite.remove(world, this.body);
	}
	this.show = () => { // Ex. Show method XXX Caution depending on the entity shape / appearance these must be altered

		push();
		translate(pos.x, pos.y);
		rotate(angle);
		strokeWeight(1);
		stroke(0);
		fill(255);
		rectMode(CENTER); // align P5 with matter.js
		rect(0, 0, this.w, this.h);
		pop();
	}

}

function AddCircle(x, y, r) {
	let options = {
		friction: .2,
		restitution: 1
	}
	this.body = Bodies.circle(x, y, (r/2), options)
	let pos = this.body.position;
	let angle = this.body.angle;
	World.add(world, this.body);
	this.r = r;
	this.houdini = () =>{
		return (pos.y > height + 50);
	}
	this.del = () =>{
		Matter.Composite.remove(world, this.body);
	}
	this.show = () => {

		push();
		translate(pos.x, pos.y);
		rotate(angle);
		strokeWeight(1);
		stroke(222);
		fill(120);
		ellipse(0, 0, this.r, this.r);
		pop();
	}

}

function AddPolygon(x, y, s, radius) {
	let options = {
		friction: .2,
		restitution: 1
	}
	this.body = Bodies.polygon(x, y, sides, radius, options)
	World.add(world, this.body);
	this.sides = s;
	this.radius = r;
	this.show = () => {
		let pos = this.body.position;
		let angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rotate(angle);
		strokeWeight(1);
		stroke(222);
		fill(120);
		poly(0, 0, this.sides, this.radius);
		pop();
	}

}
