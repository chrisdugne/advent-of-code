import PAIRS from './pairs.json' assert {type: 'json'};
import { extractPair } from './part1.js';

export const overlaps = (a, b) => (a[0] <= b[0] && a[1] >= b[0]) || (b[0] <= a[0] && b[1] >= a[0])

const nbOverlaps   = PAIRS.reduce((sum, pair) => {
  const [a, b] = extractPair(pair)
  if(overlaps(a, b)) {
    sum++
  }

  return sum;
}, 0)

console.log({nbOverlaps });
