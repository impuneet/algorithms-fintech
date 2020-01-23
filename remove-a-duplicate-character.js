//How will you remove duplicate characters from a sting?

function removeDuplicateChar(str){
    let charCount = {},
    char,
    strLength = str.length,
    newStr;

    for(var i =0 ;i<strLength;i++){
        char = str[i];
        if(charCount[char]){
            charCount[char]++;
        }else{
            charCount[char]=1;
        }
    }

    for(var j in charCount){
        if(charCount[j] == 1){
            newStr.push(j)
        }
        return newStr.join('');
    }
}