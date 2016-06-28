function arrayToLIst(arr){
	var obj = {}, list =null
	for (var iter = arr.length-1; iter >=0; iter--){
		obj.value = arr[iter]
		obj.rest = list
		list = obj
	}
	return obj;
}

function foo(){
	console.log(arrayToLIst([1,2,3,4]));
}