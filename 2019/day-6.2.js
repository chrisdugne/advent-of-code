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

const walk = (orbitsTree, currentPath, result) => {
  const key = currentPath[currentPath.length - 1];
  const subtree = orbitsTree[key];

  if (subtree.length === 0) {
    return;
  }

  subtree.forEach(leaf => {
    result.paths = {
      ...result.paths,
      [leaf]: currentPath
    };
    walk(orbitsTree, [].concat(currentPath, leaf), result);
  });
};

const orbitsTree = createOrbitsTree(orbits);
const result = {paths: {}};
walk(orbitsTree, ['COM'], result);

let nbCommon = 0;
for (let i = 0; i < result.paths.YOU.length; i++) {
  if (result.paths.YOU[i] === result.paths.SAN[i]) {
    nbCommon++;
  } else {
    break;
  }
}

console.log('result: ', result.paths.YOU.length - nbCommon + result.paths.SAN.length - nbCommon);
