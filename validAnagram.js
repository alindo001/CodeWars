// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


var isAnagram = function(s, t) {
    let sArr = s.split("").sort()
    let tArr = t.split("").sort()
    if(sArr.length !== tArr.length){return false}
    let loopLength = Math.max(sArr.length, tArr.length)
    for(i = 0; i < loopLength; ++i ){
        if(sArr[i] !== tArr[i]){
            return false
        }else{
            return true
        }
    }



}
console.log(isAnagram("five","five"))//false
console.log(isAnagram("test","test"))//true
console.log(isAnagram("rat","car")) //false