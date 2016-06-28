function countBs(str, char){
	var count =0;
	for(var iter =0; iter <= str.lastIndexOf(char); iter++){
		if(str[iter]== char)
			count++;
	}
	return count;
}
console.log(countBs("BBC", "C"));
console.log(countBs("ABCABCABB", 'console'));