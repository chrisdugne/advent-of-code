// ----------------------------------------------------
// const testWires = require('./wires-test.json');
// const wire1 = testWires[0];
// const wire2 = testWires[1];
// const wire1 = testWires[2];
// const wire2 = testWires[3];
// const wire1 = testWires[4];
// const wire2 = testWires[5];

// ----------------------------------------------------

const wire1 = require('./wire-1.json');
const wire2 = require('./wire-2.json');

// ----------------------------------------------------
const GRID = [];

const U = 'U';
const D = 'D';
const R = 'R';
const L = 'L';

const CENTER_X = 100000;
const CENTER_Y = 100000;

// ----------------------------------------------------

const readInstruction = ([way, ...value]) => ({
  way,
  value: parseInt(value.join(''))
});

const registerPoint = (grid, wireNum, {x, y}) => {
  if (!grid[x]) {
    grid[x] = [];
  }

  if (!grid[x][y]) {
    grid[x][y] = {};
  }

  if (!grid[x][y][wireNum]) {
    grid[x][y][wireNum] = 0;
  }

  grid[x][y][wireNum] += 1;
};

// ----------------------------------------------------

const drawWire = (grid, wire, wireNum) => {
  let cursorX = CENTER_X;
  let cursorY = CENTER_Y;

  wire.forEach(instruction => {
    const direction = readInstruction(instruction);
    for (let i = 0; i < direction.value; i++) {
      switch (direction.way) {
        case U:
          registerPoint(grid, wireNum, {x: cursorX, y: --cursorY});
          break;
        case D:
          registerPoint(grid, wireNum, {x: cursorX, y: ++cursorY});
          break;
        case L:
          registerPoint(grid, wireNum, {x: --cursorX, y: cursorY});
          break;
        case R:
          registerPoint(grid, wireNum, {x: ++cursorX, y: cursorY});
          break;
      }
    }
  });
};

const findIntersections = grid =>
  grid.reduce((intersections, column, x) => {
    if (column) {
      column.forEach((cell, y) => {
        if (Object.keys(cell).length > 1) {
          intersections.push({x, y});
        }
      });
    }

    return intersections;
  }, []);

// ----------------------------------------------------

drawWire(GRID, wire1, 1);
drawWire(GRID, wire2, 2);

// ----------------------------------------------------

const intersections = findIntersections(GRID);

const distances = intersections.map(intersection => {
  const d = Math.abs(CENTER_X - intersection.x) + Math.abs(CENTER_Y - intersection.y);
  return d;
});

console.log(distances);
console.log(
  'result:',
  distances.reduce((acc, d) => Math.min(acc, d), 1000000000)
);
