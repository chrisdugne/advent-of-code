// NODE_NO_WARNINGS=1 node 2022/day-1.js
import snacks from './snacks.json' assert {type: 'json'};

let nbElves = -1;

const sums = snacks.reduce((acc, snack) => {
  if(snack >= 0) {
    acc[nbElves] += snack
  }
  else {
    if(!acc[nbElves+1]){
      nbElves++;
      acc[nbElves] = 0;
    }
  }

  return acc;
}, []);

const order = sums.sort((a, b) => b - a);

const max = order[0]
const top3 = order[0] + order[1] + order[2]

console.log({max, top3});
