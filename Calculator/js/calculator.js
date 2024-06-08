const price = document.getElementById('price')
const tax = document.getElementById('tax')
const result = document.getElementById('result')

// chaning this to an array function, to change this type => to replace function
// => it is arrow instead of array
document.getElementById('btn').addEventListener('click', () => {

    result.innerHTML = price.value * tax.value;

});


// document.getElementById('btn').addEventListener('click', function(){

//     result.innerHTML = price.value * tax.value;

// });