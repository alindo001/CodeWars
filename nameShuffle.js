// Write a function that returns a string in which firstname is swapped with last name.

//  nameShuffler('john McClane'); => "McClane john" //



function nameShuffler(str){
    str = str.split(" ")
    let str1 = str[1] +" "+ str [0]
    return str
 }

 console.log(nameShuffler("John McClane"))