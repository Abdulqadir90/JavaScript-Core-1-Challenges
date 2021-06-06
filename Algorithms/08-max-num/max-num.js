// Write code to return the largest number in the given array

var maxNum = function(arr) {
    var largestNum = [34, 21, 9, 10, 11];
    for(let i = 0; i < arr.length; i++) {
        if(largestNum < arr[i]) {
          largestNum = arr[i]
        }
    } 
}
console.log(largestNum)
