// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.



function howMuchILoveYou(nbPetals) {
    var muchLoves = [
      'I love you',
      'a little',
      'a lot',
      'passionately',
      'madly',
      'not at all'
    ];
    return muchLoves[(nbPetals - 1) % muchLoves.length];
}
// 1,7,13,19,25,31.37
// 2,8,14,20,26,32,38
// 3,9,15,21,27,33,39
// 4,10,16,22,28,34,40


console.log(howMuchILoveYou(1))
console.log(howMuchILoveYou(7))
console.log(howMuchILoveYou(15))
console.log(howMuchILoveYou(268))