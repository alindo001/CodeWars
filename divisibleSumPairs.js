// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

// Example



// Three pairs meet the criteria:  and .

// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array 
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

// Input Format

// The first line contains  space-separated integers,  and .
// The second line contains  space-separated integers, each a value of .


function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for(var i = 0; i < n; i++) {
        for(var j = (i+1); j < n; j++) {
            if((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}

// function divisibleSumPairs(n, k, ar) {          //this answer will not be accepted despite it being identical to th accepted answer above
//     let pairs = 0;
//     for(let i=0;i<n;i++){
//         for(let k =(i+1);k < n;k++){
//             if((ar[i]+ar[k]) % k===0){
//              pairs++
//             }
//         }
//     }return pairs        
// }