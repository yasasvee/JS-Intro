function vector(x, y){
	this.x = x;
	this.y = y;
}

vector.prototype.plus = function(obj){
	var xSum = this.x + obj.x
	var ySum = this.y + obj.y
	return new vector(xSum, ySum);
}

vector.protorype.minus = function(obj){
	return new vector(this.x+obj.x, this.y+obj.y);
}

function foo(){
	console.log(new vector(1,1).plus(new vector(2,2)));
	console.log(new vector(1,1).minus(new vector(2,2)));
}
foo();