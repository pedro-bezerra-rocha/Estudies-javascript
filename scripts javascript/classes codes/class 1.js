let weight = parseFloat(prompt('how much do you weight?'));
let height = parseFloat(prompt('how tall are you?'));

let bmi = weight / (height * height);

console.log(bmi.toFixed(2));