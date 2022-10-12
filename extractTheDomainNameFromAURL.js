// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function parsesURL(url){
    url = url.replace("//", " ").replace("www.", "").replace(".com"," ").replace(".","").replace("http:","").replace("https:","")

    if(url.split(" ")[0]===""){
        return url.split(" ")[1]
    }else{
        return url.split(" ")[0]
    }
}

console.log(parsesURL("http://github.com/carbonfive/raygun")) // >> "github"
console.log(parsesURL("http://www.zombie-bites.com"))   // >> "zombie-bites"
console.log(parsesURL("https://www.cnet.com"))          // >> "cnet"
console.log(parsesURL("www.xakep.ru"))