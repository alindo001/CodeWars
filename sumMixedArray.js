// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    return x.reduce((n,acc)=> Number(n) + Number(acc) )
    
}

console.log(sumMix([9,3,"7","3"]))
console.log(sumMix([20,20,20,20,20]))
console.log(sumMix(['9']))