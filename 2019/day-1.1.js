const spacecraftModules = require('./day-1-spacecraft-modules');
const getFuelRequired = mass => Math.floor(mass / 3) - 2;
const fuelRequired = spacecraftModules.map(getFuelRequired).reduce((acc, m) => acc + m, 0);
console.log(fuelRequired);
