var value = 500; //Global variable
var obj = {
    value: 0,
    increment: function() {
        var that = this;
        that.value++;

        var innerFunction = function() {
            alert(that.value);
        }

        innerFunction(); //Function invocation pattern
    }
}

function foo(){
	obj.increment();
}