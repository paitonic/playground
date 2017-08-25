function Grid(row, column) {
  // generate row x column matrix filled with zeros
  this.grid = new Array(column);
  this.gridSize = row * column;
  this.row = row;
  this.column = column;

  for (var c = 0; c < column; c += 1) {
    this.grid[c] = new Array(row);
    for (var r = 0; r < row; r += 1) {
      this.grid[c][r] = 0;
    }
  }
}

Grid.prototype.isValidMove = function(move) {
  return this.grid[move.col][move.row] === 0;
}

Grid.prototype.markAsVisited = function(move) {
  this.grid[move.col][move.row] = 1;
}

Grid.prototype.markAsUnvisited = function(move) {
  this.grid[move.col][move.row] = 0;
}

Grid.prototype.print = function() {
  var line = '';
  for (var c = 0; c < this.column; c += 1) {
    for (var r = 0; r < this.row; r += 1) {
      line = line + this.grid[c][r] + ' ';
    }
    console.log(line);
    line = '';
  }
}

function Knight(grid) {
  this.grid = grid;
  this.moves = [];
  this.self = this;
}

Knight.prototype.travel = function(move) {
  this.grid.markAsVisited(move);
  this.moves.push(move);

  // if problem is solved -- quit.
  if (this.moves.length === this.grid.gridSize) {
    return true;
  }

  // generate next possible moves
  var nextPossibleMoves = this.generateNextMoves(move);

  var next;
  for (var i = 0; i < nextPossibleMoves.length; i += 1) {
    next = nextPossibleMoves[i];

    // if is not a valid move, quit.
    if (this.grid.isValidMove(next)) {
      if (this.travel(next)) {
        return true;
      }
    }
  }

  this.grid.markAsUnvisited(move);
  this.moves.pop();

  return false;
};

Knight.prototype.generateNextMoves = function(current) {
  var self = this;

  var moves = [
    this.moveUpLeft(current),
    this.moveUpRight(current),
    this.moveLeftUp(current),
    this.moveLeftDown(current),
    this.moveRightUp(current),
    this.moveRightDown(current),
    this.moveDownLeft(current),
    this.moveDownRight(current)
  ].filter(function(m) {
    return (m.row >= 0 && m.col >= 0) && (m.row < self.grid.row && m.col < self.grid.column);
  });

  return moves;
}

Knight.prototype.moveUpLeft = function(current) {
  return {row: current.row-2, col: current.col-1};
}

Knight.prototype.moveUpRight = function(current) {
  return {row: current.row-2, col: current.col+1};
}

Knight.prototype.moveLeftUp = function(current) {
  return {row: current.row-1, col: current.col-2};
}

Knight.prototype.moveLeftDown = function(current) {
  return {row: current.row+1, col: current.col-2};
}

Knight.prototype.moveRightUp = function(current) {
  return {row: current.row-1, col: current.col+2};
}

Knight.prototype.moveRightDown = function(current) {
  return {row: current.row+1, col: current.col+2};
}

Knight.prototype.moveDownLeft = function(current) {
  return {row: current.row+2, col: current.col-1};
}

Knight.prototype.moveDownRight = function(current) {
  return {row: current.row+2, col: current.col+1};
}


// usage
grid = new Grid(5, 5)
k = new Knight(grid);
k.travel({col: 2, row: 2})
console.log(k.moves);
