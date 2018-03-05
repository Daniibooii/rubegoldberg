// TODO: Here we will add the the entities being used by the game
function AddBox(x, y, w, h) {
	this.body = Bodies.rectangle(x, y, w, h)
	World.add(world, this.body);
	this.w = w;
	this.h = h;
	this.show = () => {
		let pos = this.body.position;
		let angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rect(0, 0, this.w, this.h);
		pop();
	}

}

function AddCircle(x, y, r) {
	this.body = Bodies.circle(x, y, r)
	World.add(world, this.body);
	this.r = r;
	this.show = () => {
		let pos = this.body.position;
		let angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		ellipse(0, 0, this.r, this.r);
		pop();
	}

}
