function removeDuplicate(arr){
	let exists = {},outArr = [];
    for(var i =0;i<arr.length;i++) {
    	if(!exist[arr[i]]){
    		outArr.push(arr[i]);
        	exists[arr[i]] = true;
        }
    }
    return outArr;
}
