// ---------------------------------------------------------------------

const hasDouble = (a, b, c, d, e, f) => a == b || b == c || c == d || d == e || e == f;

const smartLoops = () => {
  let possiblePasswords = [];

  // // from 138241 674034 -- 669999
  for (let a = 1; a <= 6; a++) {
    for (let b = a == 1 ? 3 : a; b <= (a == 6 ? 6 : 9); b++) {
      for (let c = a == 1 && b == 3 ? 8 : b; c <= 9; c++) {
        for (let d = c; d <= 9; d++) {
          for (let e = d; e <= 9; e++) {
            for (let f = e; f <= 9; f++) {
              if (hasDouble(a, b, c, d, e, f)) {
                const code = `${a}${b}${c}${d}${e}${f}`;
                possiblePasswords.push(code);
              }
            }
          }
        }
      }
    }
  }

  return possiblePasswords;
};

// ---------------------------------------------------------------------

const hasDoubleNum = code => {
  return hasDouble(code[0], code[1], code[2], code[3], code[4], code[5]);
};

const isGoingUp = code => {
  return (
    parseInt(code[0]) <= parseInt(code[1]) &&
    parseInt(code[1]) <= parseInt(code[2]) &&
    parseInt(code[2]) <= parseInt(code[3]) &&
    parseInt(code[3]) <= parseInt(code[4]) &&
    parseInt(code[4]) <= parseInt(code[5])
  );
};

const dumbIteration = () => {
  let possiblePasswords = [];

  for (let i = 138241; i < 674034; i++) {
    const code = `${i}`;
    if (!hasDoubleNum(code)) {
      continue;
    }
    if (!isGoingUp(code)) {
      continue;
    }

    possiblePasswords.push(code);
  }

  return possiblePasswords;
};

// ---------------------------------------------------------------------

console.log('result smart: ', smartLoops().length);
console.log('result dumb: ', dumbIteration().length);
