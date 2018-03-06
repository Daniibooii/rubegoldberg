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
    // let color = "#2ce"+random(888);
    fill(222);
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
function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
let buildMainGrid = () => {
	// Math for determining the height and width of our Cells
	cols = floor(641 / w);
	rows = floor(641 / w);
	grid = make2DArray(cols, rows);
	for (let i = 0; i < cols; i++) {let buildMainGrid = () => {
	// Math for determining the height and width of our Cells
	cols = floor(641 / w);
	rows = floor(641 / w);
	grid = make2DArray(cols, rows);
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = new Cell(i, j, w);
		}
	}
}
let showMainGrid = () => {
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}
}
		for (let j = 0; j < rows; j++) {
			grid[i][j] = new Cell(i, j, w);
		}
	}
}
let showMainGrid = () => {
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}
}
