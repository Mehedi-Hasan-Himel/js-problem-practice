const jim = 69;
const dela = 97;
const chinku = 99;


// console.log(Math.max(jim, dela, chinku));
// if (jim > dela && jim > chinku) {
//   console.log(`Jim will get the cake`);
// } else if (dela > jim && dela > chinku) {
//   console.log(`Dele will get the cake`);
// } else {
//   console.log(`Chinku will get the cake`);
// }

// HW-01:
// Write a function that will take 3 numbers will return the max number

function maxNumber1(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1, ` is the largest number`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2, ` is the largest number`);
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3, ` is the largest number`);
  }
}

maxNumber1(400, 200, 89)


// HW-02:
// Write a functio that will take 3 parameter and will return the min number

// condition:
// first time do it using if-else
// second time do it using Math.min or Math.max
