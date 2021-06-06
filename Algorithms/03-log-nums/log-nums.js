// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {
    return Math.floor( (Math.random() * num) + 1);
};
let total = logNums(30)
console.log(total)