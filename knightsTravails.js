function shortestPath(start, target) {
  const n = 8; // size of the chessboard
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  const queue = [[start, 0, [start]]]; // add an array to store the path taken
  const visited = new Set([start.toString()]); // use a Set to store visited squares

  while (queue.length > 0) {
    const [square, steps, path] = queue.shift();

    if (square.toString() === target.toString()) {
      return path; // return the path taken to reach the target
    }

    for (const [dx, dy] of moves) {
      const row = square[0] + dx;
      const col = square[1] + dy;
      if (row >= 0 && row < n && col >= 0 && col < n) {
        const nextSquare = [row, col];
        if (!visited.has(nextSquare.toString())) {
          visited.add(nextSquare.toString());
          queue.push([nextSquare, steps + 1, [...path, nextSquare]]); // add the next square to the path taken
        }
      }
    }
  }

  return []; // target not reachable from start
}

// simple test
console.log(shortestPath([0, 0], [7, 7]));
