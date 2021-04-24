
function coffeeCalculator(tasks) {
  if (oneCoffeeTaskList(tasks) + twoCoffeeTaskList(tasks) <= 3) {
    return oneCoffeeTaskList(tasks) + twoCoffeeTaskList(tasks);
  } else {
    return "You need extra sleep";
  }
};

function oneCoffeeTaskList(array) {
  let lowerCaseCounter = 0;
  array.forEach( (element) => {
    if ( [ 'cw', 'movie', 'cat', 'dog' ].includes(element) ) {
      lowerCaseCounter++;
    }
  });
  return lowerCaseCounter;
}

function twoCoffeeTaskList(array) {
  let upperCaseCounter = 0;
  array.forEach( (element) => {
    if ( [ 'CW', 'MOVIE', 'CAT', 'DOG' ].includes(element) ) {
      upperCaseCounter += 2;
    }
  });
  return upperCaseCounter;
}


module.exports = coffeeCalculator;





// function fn0 (name) {
//   return `Hello, ${name}!`;
// }

// let fn1 = function (name) {
//   return `Hello, ${name}!`;
// }

// let fn2 = (name) => {
//   return `Hello, ${name}!`;
// }

// let fn3 = (name) => `Hello, ${name}!`;