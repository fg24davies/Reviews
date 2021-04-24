
function coffeeCalculator(tasks) {
  console.log(oneCoffeeTaskList(tasks));
  return oneCoffeeTaskList(tasks);
  // if (oneCoffeeTaskList(tasks)) {
  //   return 1;
  // } else if (twoCoffeeTaskList(tasks)) {
  //   return 2;
  // } else {
  //   return 0;
  // }
};

console.log(oneCoffeeTaskList(["cw", "cw"]))

function oneCoffeeTaskList(array) {
  let counter = 0;
  array.forEach( (element) => {
    if ( [ 'cw', 'movie', 'cat', 'dog' ].includes(element) ) {
      counter++;
      //console.log(counter);
    }
    //console.log(counter);
  });
  return counter;
}

function twoCoffeeTaskList(array) {
  if ([ 'CW', 'MOVIE', 'CAT', 'DOG' ].includes(array[0]) ) {
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