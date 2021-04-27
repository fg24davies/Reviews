
function plant(seed, water, fert, temp) {
  const stem = "-";
  if (tempCheck(temp)) {
    flowerUnit = `${stem.repeat(water)}` +  `${seed.repeat(fert)}`;
    return flowerUnit.repeat(water);
  } else {
    return `${stem.repeat(water*water)}` +  `${seed}`
  }

}

function tempCheck(temp) {
  return temp >= 20 && temp <= 30;
}


module.exports = plant; 