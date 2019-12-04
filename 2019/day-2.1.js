// ---------------------------------------------------------
// https://adventofcode.com/2019/day/2
// ---------------------------------------------------------
// const test = [2,4,4,5,99,0];
// const test = [1, 1, 1, 4, 99, 5, 6, 0, 99];
// const PROGRAM = test;
// ---------------------------------------------------------

const PROGRAM = require('./day-2-1202-program-alarm.json');

// before running the program,
// replace position 1 with the value 12
// and replace position 2 with the value 2
PROGRAM[1] = 12;
PROGRAM[2] = 2;

// ---------------------------------------------------------

const ADD = 1;
const MULT = 2;
const STOP = 99;

// ---------------------------------------------------------

const nextSequence = (program, cursor) => program.slice(cursor, cursor + 4);

const compute = program => {
  let reachedEndOfProgram = false;
  let cursor = 0;

  while (!reachedEndOfProgram) {
    const sequence = nextSequence(program, cursor);

    if (!sequence[0]) {
      throw new Error('Found is an empty sequence.');
    }

    if (sequence[0] !== STOP && sequence.length !== 4) {
      throw new Error('Found is a bad sequence.', sequence);
    }

    cursor = cursor + sequence.length;

    switch (sequence[0]) {
      case ADD:
        program[sequence[3]] = program[sequence[1]] + program[sequence[2]];
        break;
      case MULT:
        program[sequence[3]] = program[sequence[1]] * program[sequence[2]];
        break;
      case STOP:
        reachedEndOfProgram = true;
        break;
      default:
        throw new Error('This is not a known sequence:', sequence);
    }
  }
};

// ---------------------------------------------------------

compute(PROGRAM);
// What value is left at position 0 after the program halts?
console.log(PROGRAM[0]);
