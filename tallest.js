function maxInArray(numbers) {
  let largest = numbers[0];

  for (let i = 0; i <= numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const heights = [167, 199, 1200, 165, 137, 3];
const tallest = maxInArray(heights);

console.log(`Tallest person is : `, tallest);

// HW: Write a function to get the lowest number in an array.

