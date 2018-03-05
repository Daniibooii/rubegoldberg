let selected = "circle";

let Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies;

let engine;
let boxes = [];
let circles = [];
let world;
// let options ={
//   mouse: mouse
// }
function setup() {
  createCanvas(640, 640);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  console.log(world);
  let = ground = Bodies.rectangle(400, 610, 810, 60, {
      isStatic: true
  });
  World.add(world, ground);
}
function mouseDragged(){
  //Here we are using our constructor to add new boxes. see entities.js
  if(selected === "box"){
  boxes.push(new AddBox(mouseX, mouseY, 80, 80));
  console.log(boxes[1])
} else if(selected === "circle"){
  boxes.push(new AddCircle(mouseX, mouseY, 40))
}else{
  console.log("nothing selected");
}

}
function draw() {
	background(51);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}
