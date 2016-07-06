function arrayToLIst(arr){

	return list;
}

function foo(){
	var list = arrayToLIst([1,2,3,4]);
	for(var node = list; node; node = node.rest){
		console.log(node);
	}
}