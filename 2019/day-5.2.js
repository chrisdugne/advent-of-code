const PROGRAM = require('./day-5-program.json');

// ---------------------------------------------------------

const INPUT = 5;

// ---------------------------------------------------------

const ADD = '01';
const MULT = '02';
const STORE_INPUT = '03';
const OUTPUT = '04';
const JUMP_IF_TRUE = '05';
const JUMP_IF_FALSE = '06';
const LESS_THAN = '07';
const EQUALS = '08';
const STOP = '99';

const INSTRUCTION_SIZE = {
  [ADD]: 4,
  [MULT]: 4,
  [STORE_INPUT]: 2,
  [OUTPUT]: 2,
  [JUMP_IF_TRUE]: 3,
  [JUMP_IF_FALSE]: 3,
  [LESS_THAN]: 4,
  [EQUALS]: 4,
  [STOP]: 1
};

const POSITION = '0';
const IMMEDIATE = '1';

// ---------------------------------------------------------

const pad = (n, width) => (n.length >= width ? n : new Array(width - n.length + 1).join('0') + n);

// ---------------------------------------------------------

const nextInstruction = (program, pointer) => {
  const digits = pad(`${program[pointer]}`, 5);
  const opcode = digits.slice(3);

  return {
    digits,
    opcode,
    size: INSTRUCTION_SIZE[opcode],
    sequence: program.slice(pointer, pointer + INSTRUCTION_SIZE[opcode])
  };
};

const compute = program => {
  let reachedEndOfProgram = false;
  let pointer = 0;

  while (!reachedEndOfProgram) {
    const instruction = nextInstruction(program, pointer);
    console.log(instruction);

    if (!instruction.sequence[0]) {
      throw new Error('Found an empty instruction.');
    }

    const modes = [2, 1, 0].map(digit => instruction.digits.slice(digit, digit + 1));
    const values = modes.map((mode, index) =>
      mode === POSITION ? program[instruction.sequence[index + 1]] : instruction.sequence[index + 1]
    );

    let pointerMoved = false;

    switch (instruction.opcode) {
      case ADD:
        program[instruction.sequence[3]] = values[0] + values[1];
        break;
      case MULT:
        program[instruction.sequence[3]] = values[0] * values[1];
        break;
      case STORE_INPUT:
        program[instruction.sequence[1]] = INPUT;
        break;
      case OUTPUT:
        console.log('OUTPUT !');
        console.log(values[0]);
        break;
      case JUMP_IF_TRUE:
        if (values[0] !== 0) {
          pointer = values[1];
          pointerMoved = true;
        }
        break;
      case JUMP_IF_FALSE:
        if (values[0] === 0) {
          pointer = values[1];
          pointerMoved = true;
        }
        break;
      case LESS_THAN:
        program[instruction.sequence[3]] = values[0] < values[1] ? 1 : 0;
        break;
      case EQUALS:
        program[instruction.sequence[3]] = values[0] === values[1] ? 1 : 0;
        break;
      case STOP:
        reachedEndOfProgram = true;
        break;
      default:
        throw new Error('This is not a known instruction:', instruction);
    }

    if (!pointerMoved) {
      pointer = pointer + instruction.size;
    }
  }
};

// ---------------------------------------------------------

compute(PROGRAM);
