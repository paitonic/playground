function initGrid(rows, columns) {
  var grid = [];
  for (var r = 0; r < rows; r += 1) {
    grid[r] = new Array(columns);
  }

  for (var r = 0; r < rows; r += 1) {
    for (var c = 0; c < columns; c += 1) {
      grid[r][c] = 0;
    }
  }

  return grid;
}

function isLegal(spotTaken, row, col, n) {
  // check for column collision
  for (var c = 0; c < n; c += 1) {
    if (spotTaken[row][c] && col !== c) {
      return false;
    }
  }

  // check for row collision
  for (var r = 0; r < n; r += 1) {
    if (spotTaken[r][col] && row !== r) {
      return false;
    }
  }

  var diagonalx = row - 1;
  var diagonaly = col - 1;

  // check for up-left diagonal
  while (diagonalx >= 0 && diagonaly >= 0) {
      if (spotTaken[diagonalx][diagonaly]) {
        return false;
      }

      diagonalx -= 1;
      diagonaly -= 1;
  }

  diagonalx = row - 1;
  diagonaly = col + 1;

  // check for up-right diagonal
  while (diagonalx >= 0 && diagonaly < n) {
    if (spotTaken[diagonalx][diagonaly]) {
      return false;
    }

    diagonalx -= 1;
    diagonaly += 1;
  }

  diagonalx = row + 1;
  diagonaly = col - 1;

  // check for down-left diagonal
  while (diagonalx < n && diagonaly >= 0) {
    if (spotTaken[diagonalx][diagonaly]) {
      return false;
    }

    diagonalx += 1;
    diagonaly -= 1;
  }

  // check for down-right diagonal
  diagonalx = row + 1;
  diagonaly = col + 1;
  while (diagonalx < n && diagonaly < n) {
    if (spotTaken[diagonalx][diagonaly]) {
      return false;
    }

    diagonalx += 1;
    diagonaly += 1;
  }

  return true;
}

function queen(spotTaken, numQueensPositioned, row, col, n) {
  if (!isLegal(spotTaken, row, col, n)) {
    return false;
  }

  if (numQueensPositioned === n) {
      return true;
  }

  for (var r = 0; r < n; r += 1) {
    for (var c = 0; c < n; c += 1) {
      if (!spotTaken[r][c]) {
        spotTaken[r][c] = 1;

        if (queen(spotTaken, numQueensPositioned+1, r, c, n)) {
          return true;
        }

        spotTaken[r][c] = 0;
      }
    }
  }

  return false;
}

function print(grid) {
  var line = '';
  for (var r = 0; r < grid.length; r += 1) {
    for (var c = 0; c < grid[r].length; c += 1) {
      line = line + grid[r][c] + ' ';
    }
    console.log(line);
    line = '';
  }
}

var grid = initGrid(8, 8);
queen(grid, 0, 0, 0, 8);
print(grid);
