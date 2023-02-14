const numbers = [45, 65, 23, 98, 19];
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

for (const number of numbers) {
  console.log(number);
}

const products = [
   { id: 1, name: `Xiomi phone`, price: 19000 },
   { id: 2, name: `iPhone phone`, price: 19000 },
   { id: 3, name: `MacBook Air`, price: 19000 },
   { id: 4, name: `Lenovo Yoga 2025`, price: 19000 },
   { id: 5, name: `walton phone`, price: 19000 },
   { id: 6, name: `Dell inspiron Laptop`, price: 19000 },
   { id: 7, name: `Samsung phone note 7`, price: 19000 },
   { id: 8, name: `Nokia old phone`, price: 19000 },
   { id: 9, name: `phone one`, price: 19000 },
];


// for( const product of products){
//    console.log(product);
// };

function matchedProducts(product, search) {
   const matched = [];
   for (const product of products) {
      if (product.name.includes(search.toLowerCase())) {
         matched.push(product);
      }
   }
   return matched;
}

const result = matchedProducts(products, `laptop`);

console.log(result);