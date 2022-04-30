

// {}   valid
// []   valid
// ()   valid 

// ( ]  invalid

// (()) valid

// ((]) invalid

// () []   valid
// [ () ]      valid

//start conditional for string
//regular expression to check string for parameters
//return true or false

//   /\([^.]+?\)|\[[^.]+\]|\{[^.]+\}/gx //the regex checks for pairs of brakcets or paranthesis while ignoring charaters in between with [^.]
                                        //the x at the end allow for ignoring whitespace


function brackets(str){

if( str.includes(/\([^.]+?\)|\[[^.]+\]|\{[^.]+\}/gx){       //conditional checks for regec in string 
    return true                                          //returns true if present
}else{
    return false                                         //returns false if not present
}}