// TODO: Here will be adding what ever data we need to the cell protoype 
function Cell(i, j, w) {
//Defines boundries for cell
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  // By default our cells won't be occupied
  this.occupied = false;
}

Cell.prototype.show = function() {
  //Draws our cells
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
  if(this.occupied){
    fill(200);
    rect(this.x, this.y, this.w, this.w);
  }
}

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.occupy = function() {
  // This is a simple function that sets a cell to occupied
  this.occupied = true;
}
