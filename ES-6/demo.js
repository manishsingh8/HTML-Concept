class Customer{
    constructor(n){
        this.name = n;
    }
    age =25;

    buy(){
        console.log(this.name);
    }
}

class GuestCustomer {
    hello(){
         console.log
    }
}

let customer1 = new Customer("manish");

console.log(customer1);

// // spread and rest operator

let array = [1,4,2,3,6];

let arr = [...array,4,5,7,7];

console.log(arr);

// rest operator

function demo(...all){
    console.log(all);
}

demo("manish","akshay","naveen","sandeep");

// array destructuring
// assigning the variable to each element in the array

let array2 = ["audi","BMW","honda","ferrari"];

let [car1,car2,car3,car4] = array2;

console.log(car2);

// map and filter

let array3 = [3,4,5,7,9];

let array4 = array3.map(x => x*2 );

console.log(array4);

let array5 = array4.filter(x => x%3==0);

console.log(array5);
