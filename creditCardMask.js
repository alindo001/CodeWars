// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  let hashSymbolString = cc.substring(0,cc.length - 4).split("").fill("#").join("")
  let lastFourDigits = cc.substring(cc.length-4,cc.length)
  return hashSymbolString + lastFourDigits


}

console.log(maskify("4556364607935616"))