import input from './input.js'
import {areAllDifferents} from './part1.js'

for(let i=0; i< 100000; i++) {
  const testing = input.slice(i, i+14);

  if(areAllDifferents(testing)) {
    console.log({testing, res: i+14});
    break;
  }
}
