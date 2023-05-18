class Vehicle1{

	constructor(numWheel,price){
		this.numWheel = numWheel;
		this.price = price;


	}
	getPrice(){
		return this.price;
	}
}

var vehicle1 = new Vehicle1(4,60000);
var vehicle2 = new Vehicle1(6,800000);

console.log(vehicle1);
console.log(vehicle1.getPrice());