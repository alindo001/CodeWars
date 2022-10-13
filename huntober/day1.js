function convert(string){
    let key ={
        '0' : 'O' ,     '5' : 'S',
        '1' : 'I'  ,    '6' : 'G',
        '2' : 'Z'  ,    '7' : 'L',
        '3' : 'E' ,     '8' : 'B',
        '4' : 'h'  ,    '9' : 'q',
    }
    let correctedArray = []
    let newString = string.split('').forEach(el => {
        if(el in key){
            correctedArray.push(key[el])
        }else{
            correctedArray.push(el)
        }
    })

return correctedArray.join('')
}

console.log(convert("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))
console.log(convert("1T'5 N1C3 T0 5AY H3770."))