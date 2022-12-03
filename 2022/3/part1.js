import BAGS from './bags.json' assert {type: 'json'};
const order = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const getPriority = letter => order.indexOf(letter) + 1

export const findCommonItem = bag => {
  const compartment1 = bag.slice(0, bag.length/2)
  const compartment2 = bag.split(compartment1)[1]

  // console.log('--------');
  // console.log(`${compartment1} | ${compartment2}`);
  // console.log(`${compartment1.split('')} | ${compartment2.split('')}`);

  return compartment1.split('').find(c => {
    return compartment2.split('').find(_c => {
      return _c === c
    })
  })
}

export const sumPriorities = bags => bags.reduce(
  (sum, bag) => sum + getPriority(findCommonItem(bag))
, 0)

console.log({sum: sumPriorities(BAGS)});
