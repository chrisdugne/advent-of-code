import {readFile} from '../../utils/files.js'

const input = readFile(import.meta.url, 'input.txt')
const lines = input.split('\n')
const forest = lines.map(line => Array.from(line))

//  -----> x
// |
// |
// y
const isVisible = (x, y) => {
  console.log({
    coord: {x,y},
    c: forest[y][x],
    top: forest[y-1] && forest[y-1][x],
    bottom: forest[y+1] && forest[y+1][x],
  });
}

let nbVisibles;
for(let l = 0; l < forest.length; l++) {
  for(let c = 0; c < forest[0].length; c++) {
    if(isVisible(c, l)){
      nbVisibles++
    }
  }
}

console.log({nbVisibles});
