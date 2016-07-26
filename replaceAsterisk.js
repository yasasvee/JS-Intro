
function concatStrings(str1, str2){
	//Strings of unequal length with asterisk at the end can be made equal by bringing characters from larger string to smaller one
	//thus, the smaller string has to be a substr of larger string at index 0 
	if(str1.indexOf("*") === str1.length-1 && str2.indexOf("*")===str2.length-1){
		if(str2.indexOf(str1.replace("*", "")) === 0)
			return str2.replace("*", "");
		else
			return "not-possible";
	}

	//Get the largest known string first and then iterate over the to-be-appended string so as to identify the duplicate 
	//substring, thereby appending the remaining substr in the end
	var finalString = str2.slice(0, str2.indexOf("*"));
	var endToken =  str1.slice(str1.indexOf("*")+1);
	if(endToken=="")
		endToken = str2.slice(str2.indexOf("*")+1)
	var temp ="";
	while(endToken !== ""){
		if(finalString.lastIndexOf(endToken)!== -1){
			if(finalString.lastIndexOf(endToken)=== (finalString.length-endToken.length))
				break;
		}
			temp = endToken[endToken.length-1]+temp;
			endToken = endToken.slice(0, endToken.length-1)
	}
	finalString+=temp;
	if(finalString.indexOf(str2.slice(str2.indexOf("*")+1)) !== -1)
		if(finalString.indexOf(str1.slice(0, str1.indexOf("*"))) === 0)
			return finalString;
	return "not-possible";
}

function replaceAsterisk(string1, string2){
	//If either of the strings has only asterisk, then return the other string
	if(string1 === "*" || string2 === "*")
		return string1.replace("*","")+string2.replace("*","");

	else if(string1.indexOf("*") !== string2.indexOf("*")){
		if(string1.indexOf("*") < string2.indexOf("*"))	
			return concatStrings(string1, string2);
		else
			return concatStrings(string2, string1);
	}
	//two strings with asterisk ast same position can be equal only if they are equal without asterisk or for pattern like
	//the last test case
	else{
		if(string1.replace("*", "") === string2.replace("*", ""))
			return string1.replace("*", "");
		else if(string1.slice(0, string1.indexOf("*"))===string2.slice(string2.indexOf("*")+1) && string2.slice(0, string2.indexOf("*"))===string1.slice(string1.indexOf("*")+1))
			return string1.replace("*", "")+string2.slice(string2.indexOf("*")+1);	
		else 
			return "not-possible";
	}
}

function testsHandler(){
	console.log(replaceAsterisk("GOOD*LUCK","*"));
	console.log(replaceAsterisk("*","B*"));
	console.log(replaceAsterisk("*", "*"));

	console.log(replaceAsterisk("SOCIAL*WIST","SOCIALTW*AFSADFSDAST"));
	console.log(replaceAsterisk("SOCIA*TWIST", "SOCIALTWI*T"));
	console.log(replaceAsterisk("HELLO*", "HI*"));
	console.log(replaceAsterisk("*EXAMPLETEST", "THIRDEXAMPLE*"));
	console.log(replaceAsterisk("*C", "D*"));
	console.log(replaceAsterisk("PROFESS*", "*PROFESS"));

	console.log(replaceAsterisk("*TELL", "*AFRIEND"));
	console.log(replaceAsterisk("EXAMPLE*TESTING", "TESTING*STRING"));
	console.log(replaceAsterisk("EXAMPLE*TESTING", "TESTING*EXAMPLE"));
	console.log(replaceAsterisk("EXAMPLE*", "*EXAKPLE"));
	console.log(replaceAsterisk("YASASVEE*ATREYA", "YASAS*"));
	console.log(replaceAsterisk("YASASVEE*ATREYA", "YASAS*ATREYA"));
	console.log(replaceAsterisk("ASDFYASASVEE*ATREYA", "YASAS*ATREYAASDF"));	
}