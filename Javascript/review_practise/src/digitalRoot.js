function digitalRoot(number) {
  let digits = number.toString().split("");
  let integers = digits.map((digit) => parseInt(digit));

  let sum = integers.reduce((a, b) => a + b);
  console.log(integers);
  console.log(sum);
  return sum;
}

module.exports = digitalRoot;
