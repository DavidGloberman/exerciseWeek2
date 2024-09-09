function printArrow(num, dircrion = true) {
  if (dircrion) {
    console.log("-".repeat(num) + ">");
  } else {
    console.log("<", "-".repeat(num));
  }
}

function printNice(...numbers) {
  const max = numbers.reduce((acc, curr) => (acc > curr ? acc : curr));
  const counting = numbers.length;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  let average = 0;
  if (counting) {
    average = sum / counting;
  }
  let four;
  if (counting > 4) {
    four = numbers[3];
  } else {
    four = numbers[-1];
  }
  console.log(max, counting, sum, average, four);
}

function truangular(num) {
  for (let i = 1; i < num + 1; i++) {
    console.log("*".repeat(i));
  }
}

function invertedTruangular(num) {
  for (let i = num; i > 0; i--) {
    console.log("*".repeat(i));
  }
}

function multiplicationTable(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      process.stdout.write(`${i * j}   `);
    }
    console.log("");
  }
}

function reverseNumber(num) {
  let a = num.string;
  console.log(`${a}`);
}
reverseNumber(5654);
