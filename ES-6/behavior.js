function Vehicle(numWheel, price){

	this.numWheel = numWheel;
	this.price  = price;

	this.getPrice = function(){
         return this.price;
 	}
}

var vehicle1 = new Vehicle(2,50000);

var vehicle2 = new Vehicle(4,500000);

console.log(vehicle1);
console.log(vehicle2);
//here we can see that both the vhicle have getPrice function in it 
//so to remove that every object have that fun we use prototype 

console.log(vehicle1.getPrice());