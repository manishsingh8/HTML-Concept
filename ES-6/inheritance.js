class Vehicle2{

	constructor(numWheel,price){
		this.numWheel = numWheel;
		this.price = price;


	}
	getPrice(){
		return this.price;
	}
	printDiscription(){
		console.log("vehicle " , this.numWheel,this.price);
	}
}


class Car extends Vehicle2{
	constructor(numDoor){
		super(4,1200000);
		this.numDoor = numDoor;
	}

	printDiscription(){
		super.printDiscription();
		// super.getPrice();
		console.log("Car" , this.numDoor);
		console.log(super.getPrice());
	}
}

var c = new Car(2);
console.log(c);
