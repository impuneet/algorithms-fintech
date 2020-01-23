//How could you find the first non repeating char in a string?

function non_repeating_char(str){
    let stringLength = str.length , 
    charCount = {} ,
    char;

    for(var i=0;i<len ; i++){
        char=str[i]
        if(charCount[char]){
            charCount[char]++;
        }else{
            charCount[char]=1;
        }
    }

    for(var j in charCount) {
        if(charCount[j] = 1)
            return  j;
    }
}