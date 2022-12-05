import MOVES from './moves.json' assert {type: 'json'};
import STACKS from './stacks.json' assert {type: 'json'};


export const useCrane9000 = (_stacks, moves) => {
  const stacks = Array.from(_stacks, s => Array.from(s) )
  moves.map((_) => {
    for(let i = 0; i < _.move; i++){
      const crate = stacks[_.from - 1].pop();
      stacks[_.to - 1].push(crate);
    }
  })

  const tops = stacks.reduce((acc, stack) => `${acc}${stack[stack.length-1]}`, '')
  return tops;
}

console.log({useCrane9000: useCrane9000(STACKS, MOVES)});
