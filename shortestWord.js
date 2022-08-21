// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
    let newArr = []
    const sorted = s.split(' ').forEach(word => 
        newArr.push(word.length))
    return newArr.sort((a,b)=> a-b)[0]
     
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
console.log(findShort("ProofOfWork Monero LiteCoin"))