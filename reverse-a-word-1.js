// reverse a word with an array with typechecking and 
function reverseString(str) {
  var rtnString = [];
  if (!str || typeof str != 'string' || str.length < 2) {
    return str;
  }
  for (var i = str.length - 1; i >= 0; i--) {
    rtnString.push(str[i]);
  }
  return rtnString.join('');
}

console.log(reverseString('you are a nice dude'));