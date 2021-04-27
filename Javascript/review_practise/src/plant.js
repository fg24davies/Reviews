
function plant(seed, water, fert, temp) {
  const stem = "-";
  flowerUnit = `${stem.repeat(water)}` +  `${seed.repeat(fert)}`;
  return flowerUnit.repeat(water);
}


module.exports = plant; 