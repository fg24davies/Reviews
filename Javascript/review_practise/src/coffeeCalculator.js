
function coffeeCalculator(tasks) {
  if (oneCoffeeTaskList(tasks)) {
    return 1;
  } else if (tasks.includes("CW")) {
    return 2;
  } else {
    return 0;
  }
};

function oneCoffeeTaskList(array) {
  if ( [ 'cw', 'movie', 'cat', 'dog' ].includes(array[0]) ) {
    return true;
  } else {
    return false; 
  }

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