function cc3(str, number) {
  var newString = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      if (str.charCodeAt(i) - number <= 90 && str.charCodeAt(i) - number >= 65){
        newString.push(String.fromCharCode(str.charCodeAt(i) - number));
      } else if (str.charCodeAt(i) - number >= 90) {
        newString.push(String.fromCharCode(str.charCodeAt(i) - 26 - number));
      } else if (str.charCodeAt(i) - number <= 65){
        newString.push(String.fromCharCode(str.charCodeAt(i) + 26 - number));
      }
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
      if (str.charCodeAt(i) - number <= 122 && str.charCodeAt(i) - number >= 97){
        newString.push(String.fromCharCode(str.charCodeAt(i) - number));
      } else if (str.charCodeAt(i) - number >= 122) {
        newString.push(String.fromCharCode(str.charCodeAt(i) - 26 - number));
      } else if (str.charCodeAt(i) - number <= 97){
        newString.push(String.fromCharCode(str.charCodeAt(i) + 26 - number));
      }
    }
  }
  return newString.join("");
}

module.exports = {
  cc3: cc3
};
