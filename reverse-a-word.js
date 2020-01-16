//concatenation is not optimized solution in older browsers
function reverseString(str){
    var rtnString = '';

    for(var i= str.length-1;i>=0;i--){
      rtnString += str[i];
    }
    return rtnString
}

console.log(reverseString('you are a nice dude'));