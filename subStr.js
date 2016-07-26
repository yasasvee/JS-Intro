var reverseSubstr = function(start, end, string){
	if(start >= end)
		return string;
	var subStr = string.slice(start, end);
	subStr = subStr.split("").sort().join("");
	return string.slice(0,start)+subStr+string.slice(end,string.length);
}

var manippulateString = function(string){
	return reverseSubstr(Math.floor(Math.random()*string.length), Math.floor(Math.random()*string.length), string);
}

var foo =  function (){
	console.log(manippulateString("Krishna"));
	console.log(manippulateString("Yasasvee"));
}

foo();