// ---------------------------------------------------------
// https://adventofcode.com/2019/day/2#part2
// ---------------------------------------------------------

const PROGRAM = require('./day-2-1202-program-alarm.json');

// ---------------------------------------------------------

const ADD = 1;
const MULT = 2;
const STOP = 99;

// ---------------------------------------------------------

const nextInstruction = (program, pointer) => program.slice(pointer, pointer + 4);

const compute = program => {
  let reachedEndOfProgram = false;
  let pointer = 0;

  while (!reachedEndOfProgram) {
    const instruction = nextInstruction(program, pointer);

    if (!instruction[0]) {
      throw new Error('Found an empty instruction.');
    }

    if (instruction[0] !== STOP && instruction.length !== 4) {
      throw new Error('Found a bad instruction.', instruction);
    }

    pointer = pointer + instruction.length;

    switch (instruction[0]) {
      case ADD:
        program[instruction[3]] = program[instruction[1]] + program[instruction[2]];
        break;
      case MULT:
        program[instruction[3]] = program[instruction[1]] * program[instruction[2]];
        break;
      case STOP:
        reachedEndOfProgram = true;
        break;
      default:
        throw new Error('This is not a known instruction:', instruction);
    }
  }
};

// ---------------------------------------------------------

const getOutput = (noun, verb) => {
  const program = [].concat(PROGRAM);

  program[1] = noun;
  program[2] = verb;
  compute(program);
  return program[0];
};

// ---------------------------------------------------------

for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    const output = getOutput(noun, verb);
    if (19690720 === output) {
      console.log({noun, verb, result: 100 * noun + verb});
    }
  }
}
