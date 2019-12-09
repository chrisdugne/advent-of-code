// const PROGRAM = [3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15, 4, 15, 99, 0, 0];
// const PROGRAM = [
//   3,
//   31,
//   3,
//   32,
//   1002,
//   32,
//   10,
//   32,
//   1001,
//   31,
//   -2,
//   31,
//   1007,
//   31,
//   0,
//   33,
//   1002,
//   33,
//   7,
//   33,
//   1,
//   33,
//   31,
//   31,
//   1,
//   32,
//   31,
//   31,
//   4,
//   31,
//   99,
//   0,
//   0,
//   0
// ];

// -----------------------------------------------------------------------------

const computer = require('./day-7.1-computer');

const getAmplifierOutput = (inputs, program) => {
  const _program = [].concat(program);
  return computer(inputs, _program);
};

const serialize = (settings, input, program) => {
  if (settings.length === 0) {
    return input;
  }

  const init = settings.shift();
  const output = getAmplifierOutput([init, input], program);
  return serialize(settings, output, program);
};

// -----------------------------------------------------------------------------

function permut(string) {
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations

  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i)
      // if char was used already
      continue; // skip it this time

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString)) permutations.push(char + subPermutation);
  }
  return permutations;
}

// -----------------------------------------------------------------------------

const PROGRAM = require('./day-7-program');

// -----------------------------------------------------------------------------

const permutations = permut('01234');
var chars = permutations[0].split('');

const results = [];
permutations.forEach(permutation => {
  const settings = permutation.split('');
  const output = serialize([].concat(settings), 0, PROGRAM);
  results.push({
    settings,
    output
  });
});

results.sort((a, b) => {
  var outputA = a.output;
  var outputB = b.output;
  if (outputA < outputB) {
    return 1;
  }
  if (outputA > outputB) {
    return -1;
  }

  return 0;
});

// -----------------------------------------------------------------------------
// result: { settings: [ '0', '3', '4', '2', '1' ], max: 75228 }
console.log({settings: results[0].settings, max: results[0].output});
