import BAGS from './bags.json' assert {type: 'json'};
import { getPriority } from './part1.js';

export const findBadge = bags => {
  const badges = bags[0].split('').filter(item => bags[1].split('').includes(item)).filter(item => bags[2].split('').includes(item));
  return badges[0];
}

export const gather = (stuffs, nbByGroups = 3) =>
  stuffs.reduce((groups, stuff) => {
    const lastGroup = groups[groups.length - 1]
    if(lastGroup.length === nbByGroups) {
      groups[groups.length] = [stuff]
    }
    else {
      lastGroup.push(stuff)
    }
    return groups
  }, [[]])


export const sumBadgePriorities = bags => gather(bags).reduce((sum, groupedBags) => {
  return sum + getPriority(findBadge(groupedBags));
}, 0)

console.log({sumBadges: sumBadgePriorities(BAGS)});
