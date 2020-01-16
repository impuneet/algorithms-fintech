function mergedTwoSortedArrays(a,b){
    var i=1,j=1;
    var aElem = a[0];
    var bElem = b[0];
    var merged = [];


    if(a.length == 0)
        return b;
    if(b.length == 0)
        return a;

    while(aElem || bElem){
        if((aElem && !bElem) || aElem < bElem ){
            merged.push(aElem);
            aElem=a[i++];
        }
        else{
            merged.push(bElem);
            bElem=b[j++];
        }
    }
    return merged;
}

console.log(mergedTwoSortedArrays([2,5,6,9], [1,2,3,29]));