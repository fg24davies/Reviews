let stem = "-";

function plant(seed, water, fert, temp) {  
  if (tempCheck(temp)) {
    flowerUnit = `${stem.repeat(water)}` +  `${seed.repeat(fert)}`;
    return flowerUnit.repeat(water);
  } else {
    return wrongTemp(water, seed);
  }
}

function tempCheck(temp) {
  return temp >= 20 && temp <= 30;
}

function wrongTemp(water, seed){
  return `${stem.repeat(water*water)}` +  `${seed}`;
}

module.exports = plant; 