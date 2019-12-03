// ----------------------------------------------------
// https://adventofcode.com/2019/day/3#part2
// ----------------------------------------------------
// const testWires = require('./wires-test.json');
// test1: 30
// const wire1 = testWires[0];
// const wire2 = testWires[1];

// test2: 610
// const wire1 = testWires[2];
// const wire2 = testWires[3];

// test3: 410
// const wire1 = testWires[4];
// const wire2 = testWires[5];

// ----------------------------------------------------

// puzzle | result: 101386
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

const registerStep = (grid, wireNum, step, {x, y}) => {
  if (!grid[x]) {
    grid[x] = [];
  }

  if (!grid[x][y]) {
    grid[x][y] = {};
  }

  if (!grid[x][y][wireNum]) {
    grid[x][y][wireNum] = 0;
  }

  grid[x][y][wireNum] = step;
};

// ----------------------------------------------------

const drawWire = (grid, wire, wireNum) => {
  let cursorX = CENTER_X;
  let cursorY = CENTER_Y;
  let step = 0;

  wire.forEach(instruction => {
    const direction = readInstruction(instruction);
    for (let i = 0; i < direction.value; i++) {
      switch (direction.way) {
        case U:
          registerStep(grid, wireNum, ++step, {x: cursorX, y: --cursorY});
          break;
        case D:
          registerStep(grid, wireNum, ++step, {x: cursorX, y: ++cursorY});
          break;
        case L:
          registerStep(grid, wireNum, ++step, {x: --cursorX, y: cursorY});
          break;
        case R:
          registerStep(grid, wireNum, ++step, {x: ++cursorX, y: cursorY});
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
          const steps = cell[1] + cell[2];
          intersections.push({x, y, steps});
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

console.log(intersections);
console.log(
  'result:',
  intersections.reduce((acc, intersection) => Math.min(acc, intersection.steps), 1000000000)
);
