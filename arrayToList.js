function arrayToLIst(arr){
	var  list =null
	for (var iter = arr.length-1; iter >=0; iter--){
		list = {value: arr[iter], rest: list};
	}
	return list;
}

function foo(){
	var list = arrayToLIst([1,2,3,4]);
	for(var node = list; node; node = node.rest){
		console.log(node);
	}
}