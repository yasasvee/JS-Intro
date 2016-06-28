function reverseArray(arr){
	for(var item in arr)
		console.log(arr[item]);
}
function reverseArrayInPlace(arr){
	for(var start=0,end=arr.length-1;start < end; start++, end--){
		arr[end] = [arr[start], arr[start] = arr[end]][0];
	}
	return arr
}
reverseArray(["A","B","C"])
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))