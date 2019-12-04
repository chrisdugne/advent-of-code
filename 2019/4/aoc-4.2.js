// ---------------------------------------------------------------------

const checkDouble = (a, b, c, d, e, f) => {
  const doubles = [];
  if (a === b) {
    doubles.push(`${a}${a}`);
  }
  if (b === c) {
    doubles.push(`${b}${b}`);
  }
  if (c === d) {
    doubles.push(`${c}${c}`);
  }
  if (d === e) {
    doubles.push(`${d}${d}`);
  }
  if (e === f) {
    doubles.push(`${e}${e}`);
  }

  const check = doubles.reduce(
    (acc, double, i) => {
      if (acc.validate) {
        return acc;
      }

      if (!acc.current) {
        return {
          current: double,
          nb: 1,
          validate: i === doubles.length - 1 ? true : false
        };
      } else {
        if (acc.current !== double) {
          if (acc.nb === 1) {
            return {
              ...acc,
              validate: true
            };
          } else {
            return {
              current: double,
              nb: 1,
              validate: i === doubles.length - 1 ? true : false
            };
          }
        } else {
          return {
            current: double,
            nb: acc.nb + 1,
            validate: false
          };
        }
      }
    },
    {
      current: null,
      nb: 0,
      validate: false
    }
  );

  const code = `${a}${b}${c}${d}${e}${f}`;
  return check.validate;
};

const compute = () => {
  let possiblePasswords = [];

  // // from 138241 674034 -- 669999
  for (let a = 1; a <= 6; a++) {
    for (let b = a == 1 ? 3 : a; b <= (a == 6 ? 6 : 9); b++) {
      for (let c = a == 1 && b == 3 ? 8 : b; c <= 9; c++) {
        for (let d = c; d <= 9; d++) {
          for (let e = d; e <= 9; e++) {
            for (let f = e; f <= 9; f++) {
              if (checkDouble(a, b, c, d, e, f)) {
                const code = `${a}${b}${c}${d}${e}${f}`;
                possiblePasswords.push(code);
              }
            }
          }
        }
      }
    }
  }

  return possiblePasswords.length;
};

// ---------------------------------------------------------------------

console.log('result: ', compute());
