import input from './input.js'

export const removeDuplicates = s => {
  const chars = Array.from(s)
  return chars.reduce((acc, c) => {
    if(!acc.includes(c)) {
      acc.push(c)
    }
    return acc
    }, [])
}

export const areAllDifferents = s => s.length === removeDuplicates(s).length;

for(let i=0; i< 100000; i++) {
  const testing = input.slice(i, i+4);

  if(areAllDifferents(testing)) {
    console.log({testing, res: i+4});
    break;
  }
}
