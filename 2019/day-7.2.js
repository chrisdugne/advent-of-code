const PROGRAM = [
  3,
  26,
  1001,
  26,
  -4,
  26,
  3,
  27,
  1002,
  27,
  2,
  27,
  1,
  27,
  26,
  27,
  4,
  27,
  1001,
  28,
  -1,
  28,
  1005,
  28,
  6,
  99,
  0,
  0,
  5
];
// const PROGRAM = [
//   3,
//   52,
//   1001,
//   52,
//   -5,
//   52,
//   3,
//   53,
//   1,
//   52,
//   56,
//   54,
//   1007,
//   54,
//   5,
//   55,
//   1005,
//   55,
//   26,
//   1001,
//   54,
//   -5,
//   54,
//   1105,
//   1,
//   12,
//   1,
//   53,
//   54,
//   53,
//   1008,
//   54,
//   0,
//   55,
//   1001,
//   55,
//   1,
//   55,
//   2,
//   53,
//   55,
//   53,
//   4,
//   53,
//   1001,
//   56,
//   -1,
//   56,
//   1005,
//   56,
//   6,
//   99,
//   0,
//   0,
//   0,
//   0,
//   10
// ];

// -----------------------------------------------------------------------------

const computer = require('./day-7.1-computer');

const getAmplifierOutput = (inputs, program) => {
  const _program = [].concat(program);
  const _inputs = [].concat(inputs);
  return computer(_inputs, _program);
};

const feedbackLoop = (settings, input, program, initialize) => {
  let nextOutput;

  if (initialize) {
    const o1 = getAmplifierOutput([settings[0], input], program);
    const o2 = getAmplifierOutput([settings[1], o1], program);
    const o3 = getAmplifierOutput([settings[2], o2], program);
    const o4 = getAmplifierOutput([settings[3], o3], program);
    const o5 = getAmplifierOutput([settings[4], o4], program);

    console.log({o5});
    nextOutput = serialize([o5], program);
  } else {
    nextOutput = serialize([input], program);
  }

  console.log({input, nextOutput});
  if (nextOutput < input) {
    console.log('DONE', input);
    return input;
  }

  return feedbackLoop([], nextOutput, program);
};

const serialize = (inputs, program) => {
  const o1 = getAmplifierOutput(inputs, program);
  const o2 = getAmplifierOutput([o1], program);
  const o3 = getAmplifierOutput([o2], program);
  const o4 = getAmplifierOutput([o3], program);
  const o5 = getAmplifierOutput([o4], program);
  return o5;
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

// const PROGRAM = require('./day-7-program');

// -----------------------------------------------------------------------------

const permutations = permut('56789');
var chars = permutations[0].split('');

const results = [];
permutations.forEach(permutation => {
  const settings = permutation.split('');
  console.log('====================', permutation);
  const output = feedbackLoop([].concat(settings), 0, PROGRAM, true);
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
