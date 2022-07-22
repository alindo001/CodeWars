// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    let switchArr = []
    x = x.split('').forEach(letter => {
        if(letter==="a"){
            switchArr.push('b')
        }else if(letter==="b"){
            switchArr.push("a")
        }else{
            switchArr.push(letter)
        }
    })
    return switchArr.join('')
}

console.log(switcheroo('acb'))