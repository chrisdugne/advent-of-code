import PAIRS from './pairs.json' assert {type: 'json'};

export const isFullyContained = (a, b) => a[0] <= b[0] && a[1] >= b[1]
export const oneFullyContainsTheOther = (a, b) => isFullyContained(a,b) || isFullyContained(b,a)

export const extractPair = (pair) =>
   pair.split(',').map(s => s.split('-').map(s => parseInt(s)))

const nbFullyContaining = PAIRS.reduce((sum, pair) => {
  const [a, b] = extractPair(pair)
  if(oneFullyContainsTheOther(a, b)) {
    sum++
  }

  return sum;
}, 0)

console.log({nbFullyContaining});
