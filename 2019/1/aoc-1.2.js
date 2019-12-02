const spacecraftModules = require('./spacecraft-modules');

const getFuelRequired = mass => Math.max(Math.floor(mass / 3) - 2, 0);

const calculateFuelRequired = mass => {
  const fuelRequired = getFuelRequired(mass);

  if (fuelRequired === 0) {
    return 0;
  }

  const next = calculateFuelRequired(fuelRequired);
  return fuelRequired + next;
};

const fuelRequired = modules => modules.map(calculateFuelRequired).reduce((acc, m) => acc + m, 0);
console.log(fuelRequired(spacecraftModules));
