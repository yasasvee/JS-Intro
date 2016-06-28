var count = 0;
while(count<=100){
    if(count %3 == 0)
        console.log("FIZZ");
    else if (count % 5 == 0)
        console.log("BUZZ");
    else 
        console.log(count);
    count++;
}
