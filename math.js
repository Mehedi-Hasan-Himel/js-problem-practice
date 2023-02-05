const result = Math.pow(3, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);

if (gap < 5) {
  console.log(`You gays can be friends`);
} else {
  console.log(`You gays stay a part`);
}

// =========================
// =========================
const number = 2.4598;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const result2 = Math.ceil(number);
const result3 = Math.floor(number);
// console.log(result2, result3);

// console.log(Math.round(Math.random() * 100));

for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}
