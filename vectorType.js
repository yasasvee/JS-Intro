function vectorType(x,y){
	this.x = x
	this.y = y

}

vectorType.prototype.plus = function(obj){
	return new vectorType(this.x+obj.x, this.y+obj.y);
}

vectorType.prototype.minus = function(obj){
	return new vectorType(this.x-obj.x, this.y-obj.y);
}

Object.defineProperty(vectorType.prototype, "length", {
	get: function(){return Math.sqrt(((this.x-0)*(this.x-0))+((this.y-0)*(this.y-0)));}
});

function foo(){
	console.log(new vectorType(1, 2).plus(new vectorType(2, 3)));
	console.log(new vectorType(1, 2).minus(new vectorType(2, 3)));
	console.log(new vectorType(3, 4).length);
}