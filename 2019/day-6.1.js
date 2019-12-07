// const orbits = ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L'];
const orbits = require('./day-6');

const createOrbitsTree = orbits =>
  orbits.reduce((orbitsTree, orbit) => {
    const masses = orbit.split(')');
    const parentKey = masses[0];
    const childKey = masses[1];

    const child = orbitsTree[childKey] ? orbitsTree[childKey] : [];
    const parent = orbitsTree[parentKey] ? [].concat(orbitsTree[parentKey], childKey) : [childKey];

    return {
      ...orbitsTree,
      [childKey]: child,
      [parentKey]: parent
    };
  }, {});

const count = (orbitsTree, subtree, level) => {
  if (subtree.length === 0) {
    return level;
  }

  return (
    level +
    subtree.reduce((sum, leaf) => (sum = sum + count(orbitsTree, orbitsTree[leaf], level + 1)), 0)
  );
};

const orbitsTree = createOrbitsTree(orbits);
console.log({orbitsTree});
console.log('===================');
const nbOrbits = count(orbitsTree, orbitsTree.COM, 0);
console.log('result: ', nbOrbits);
