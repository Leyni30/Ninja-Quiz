const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    }
  });

    console.log(score);

    // show result on screen
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
});



// js exercises, array methods

// filter
// const numbers = [ 10, 30, 20, 40, 50];

// const filtered = numbers.filter(num => {
//   return num > 20;
// });

// const usersFiltered = urers.filter(user => {
//   return user.premium; 
// });

// map
// const saleProducts = products.map((product) => {
// if(product.price > 20){
//   return {name: product.name, price: product.price / 2};
// }else{
//   return product;
// }
// });

// reduce 

// const marioTotal = scores.reduce((acc, curr) => {
//   if(curr.name = mario){
//     acc += curr.score;
//   }
//   return acc
// }, 0);

// console.log(marioTotal);








