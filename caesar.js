function decryptItem(str, number) {
  var newString = [];
  var minUppercaseCode = 65;
  var maxUppercaseCode = 90;
  var minLowercaseCode = 97;
  var maxLowercaseCode = 122;
  var numberOfLetters = 26;
  var spaceCode = 32;

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= minUppercaseCode && str.charCodeAt(i) <= maxUppercaseCode) {
      if (str.charCodeAt(i) - number <= maxUppercaseCode && str.charCodeAt(i) - number >= minUppercaseCode){
        newString.push(String.fromCharCode(str.charCodeAt(i) - number));
      } else if (str.charCodeAt(i) - number >= maxUppercaseCode) {
        newString.push(String.fromCharCode(str.charCodeAt(i) - numberOfLetters - number));
      } else if (str.charCodeAt(i) - number <= minUppercaseCode){
        newString.push(String.fromCharCode(str.charCodeAt(i) + numberOfLetters - number));
      }
    } else if (str.charCodeAt(i) >= minLowercaseCode && str.charCodeAt(i) <= maxLowercaseCode){
      if (str.charCodeAt(i) - number <= maxLowercaseCode && str.charCodeAt(i) - number >= minLowercaseCode){
        newString.push(String.fromCharCode(str.charCodeAt(i) - number));
      } else if (str.charCodeAt(i) - number >= maxLowercaseCode) {
        newString.push(String.fromCharCode(str.charCodeAt(i) - numberOfLetters - number));
      } else if (str.charCodeAt(i) - number <= minLowercaseCode){
        newString.push(String.fromCharCode(str.charCodeAt(i) + numberOfLetters - number));
      }
    } else if (str.charCodeAt(i) === spaceCode){
      newString.push(String.fromCharCode(str.charCodeAt(i)));
    } else {
      return "You have entered an invalid character."
    }
  }
  return newString.join("");
}

module.exports = {
  decryptItem: decryptItem
};
