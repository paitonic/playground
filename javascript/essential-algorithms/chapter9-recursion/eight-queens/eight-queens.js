function Grid(columns, rows) {
  // generate row x column matrix filled with zeros
  this.grid = new Array(columns);
  this.gridSize = rows * columns;
  this.rows = rows;
  this.columns = columns;
  this.queens = []; // queens on grid

  for (var c = 0; c < columns; c += 1) {
    this.grid[c] = new Array(rows);
    for (var r = 0; r < rows; r += 1) {
      this.grid[c][r] = 0;
    }
  }
}

// generate all possible valid positions
Grid.prototype.generatePossiblePositions = function() {
  var locations = [];

  for (var c = 0; c < this.columns; c += 1) {
    for (var r = 0; r < this.rows; r += 1) {
      if (this.isLegalPosition({col: c, row: r})) {
        locations.push({col: c, row: r});
      }
    }
  }

  return locations;
}

Grid.prototype.isLegalPosition = function(location) {
  for (var i = 0, max = this.queens.length; i < max; i += 1) {
    if (this.isRowCollision(location, this.queens[i]) ||
      this.isColumnCollision(location, this.queens[i]) ||
      this.isDiagonalCollision(location, this.queens[i]) ||
      this.isEqual(location, this.queens[i])) {
      return false;
    }
  }

  return true;
}

Grid.prototype.isRowCollision = function(loc, queen) {
  return loc.row === queen.row;
}

Grid.prototype.isColumnCollision = function(loc, queen) {
  return loc.col === queen.col;
}

Grid.prototype.isDiagonalCollision = function(loc, queen) {
  return Math.abs(loc.row - queen.row) == Math.abs(loc.col - queen.col);
}

Grid.prototype.isEqual = function(loc, queen) {
  return loc.row === queen.row && loc.col === queen.col;
}

Grid.prototype.findPositionForQueen = function(queen, nQueens) {
  this.grid[queen.col][queen.row] = 1;
  this.queens.push(queen);

  if (this.queens.length === nQueens) {
    return true;
  }

  var positions = this.generatePossiblePositions();
  var newQueen;
  for (var i = 0, max = positions.length; i < max; i += 1) {
    newQueen = new Queen(positions[i].col, positions[i].row);

    if (this.findPositionForQueen(newQueen, nQueens)) {
      return true;
    }
  }

  this.queens.pop();
  this.grid[queen.col][queen.row] = 0;

  return false;
}

Grid.prototype.print = function() {
  var line = '';
  for (var c = 0; c < this.columns; c += 1) {
    for (var r = 0; r < this.rows; r += 1) {
      line = line + this.grid[c][r] + ' ';
    }
    console.log(line);
    line = '';
  }
}

function Queen(col, row) {
  this.col = col;
  this.row = row;
}

// usage
var grid = new Grid(8, 8);
q = new Queen(0, 0);
grid.findPositionForQueen(q, 8);
grid.print();
