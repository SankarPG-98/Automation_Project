let arr = [67, 8, 9, 67, 89, 100];

// Use reduce to sum up the values
let sum = arr.reduce((sum, mark) => sum + mark, 0);
console.log(sum);

// Use reduce to multiply the values
let multiply = arr.reduce((multiply, mark) => multiply * mark, 1);
console.log(multiply);

// Filter to get even numbers from the array
let evenNumber = arr.filter(even => even % 2 == 0);
console.log("Even numbers of the array: " + evenNumber);

// Multiply even numbers by 3
let score = evenNumber.map(score => score * 3);
console.log("After multiplying by 3: " + score);

// Sum the multiplied values
sum = score.reduce((sum, summing) => sum + summing, 0);
console.log("Sum of the new array: " + sum);

// Chaining filter, map, and reduce
let chaining = arr.filter(even => even % 2 == 0)
                  .map(multi => multi * 3)
                  .reduce((sum, summing) => sum + summing, 0);
console.log("After chaining: " + chaining);