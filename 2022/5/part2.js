import MOVES from './moves.json' assert {type: 'json'};
import STACKS from './stacks.json' assert {type: 'json'};

export const useCrane9001 = (_stacks, moves) => {
  const stacks = Array.from(_stacks, s => Array.from(s) )
  moves.map((_) => {
    const movingStack = [];
    for(let i = 0; i < _.move; i++){
      const crate = stacks[_.from - 1].pop();
      if(crate){
        movingStack.push(crate)
      }
    }

    stacks[_.to - 1] = [...stacks[_.to - 1], ... movingStack.reverse()];
  })

  const tops = stacks.reduce((acc, stack) => `${acc}${stack[stack.length-1]}`, '')
  return tops;
}

console.log({useCrane9001: useCrane9001(STACKS, MOVES)});
