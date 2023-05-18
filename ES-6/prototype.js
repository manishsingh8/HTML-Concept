function Vehicle(numWheel, price){

	this.numWheel = numWheel;
	this.price  = price;

	// this.getPrice = function(){
 //         return this.price;
 // 	}
}

Vehicle.prototype.getPrice = function(){
         return this.price;
 	};

var vehicle1 = new Vehicle(2,50000);

var vehicle2 = new Vehicle(4,500000);

console.log(vehicle1);
// here no getPrice fun in vehicle but both the vehicle has reference
//to getPrice prototype that's why function below print the price with no error


console.log(vehicle1.getPrice());


//property of vehicle

console.log(Vehicle.prototype.isPrototypeOf(vehicle1));

console.log(vehicle1.hasOwnProperty('price'));