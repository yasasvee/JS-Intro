function foo(){
	var rows = 1;
	while(rows<=8){
		var columns =1;
		var str = "";
		while(columns <=8){
			if(rows % 2 ==0){
			if(columns %2 ==0){
				str+="#";
			}
			else{
				str+=" ";
			}
			}
			else{
			if(columns %2 !=0){
				str+="#";
			}
			else{
				str+=" ";
			}
	
			}
			columns++;
		}
		console.log(str);
		rows++;
	}
}
