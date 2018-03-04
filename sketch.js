// TODO:
/*
**Add matter.js world system to have our controls outside the play area**
** Add build mode that reveals grid**
** Resize and center canvas then adjust grid**
** Work out math for adding our entities to the center of a cell **
** Add entities **
** Configure the engine in matter.js **
** Organize the structure of our game files, and even be sure we're orienting around our objects well**
** Ideas? Throw em down!**
*/
// END TODO

//Declare and assign the width (w) of our cells and declares variables for laying out our grid
const w = 40;
let grid, rows, cols;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  // Our play area
  createCanvas(401, 401);
  // Math for determining the height and width of our Cells
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }

}

function mousePressed() {
  // Simple function to see if the mouse if within the boundries of a cell, see cell.js/cell.prototype.contains
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].occupy();
      }
    }
  }
}

function draw() {
  //renders our game
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
