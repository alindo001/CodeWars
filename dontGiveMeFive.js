Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)





function dontGiveMeFive(start, end){
    count = 0
      for(i = start; i <= end; i++){
          if (/5/.test(i)==true){
            

          }else{
             count ++ 
          }
      }
  }

