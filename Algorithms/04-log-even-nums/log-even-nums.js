// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {
    let el =  Math.floor(Math.random() * num);
    if(el % 2 === 0){
        return el;
    }
};

let total = logEvenNums(50);
console.log(total)
