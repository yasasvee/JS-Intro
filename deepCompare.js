	function deepEqual(obj1, obj2){
		if((typeof(obj1) === "object") && (typeof(obj2) ==="object")){
			if(Object.keys(obj1).length !== Object.keys(obj2).length)
				return false;
			for (var property in obj1){
				if((deepEqual(obj1.property, obj2.property))===false)
					return false; 
			}
		}
		else if(typeof(obj1)===typeof(obj2)){
			return obj1===obj2;
		}
		else 
			return false;
		return true;
	}
	var obj = {here: {is: "an"}, object: 2};
	console.log(deepEqual(obj, obj));
	console.log(deepEqual(obj, {here: 1, object: 2}));
	console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));