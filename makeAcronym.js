// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

function toAcronym(inp){
    let newArr = []
    inp = inp.split(' ').forEach(letter => newArr.push(letter[0]))
    return newArr.join('').toUpperCase()
    
  }

console.log(toAcronym("Code Wars"))
console.log(toAcronym('Science Health Institue technology'))