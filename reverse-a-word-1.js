//reverse a word with 
function reverseString(str){
    var rtnString = [];

    for(var i= str.length-1;i>=0;i--){
      rtnString.push(str[i]);
    }
    return rtnString.join('');
}

console.log(reverseString('you are a nice dude'));