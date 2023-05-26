var detail = [
       {
       	name:"Aman",
       	age:25
       },
       {
       	name:"Rohan",
       	age:20
       },
       {
       	name:"Ankit",
        age:35
       },
       {
       	name:"Mohan",
       	age:40
       },
       {
       	name:"Ram",
       	age:21
       }
];

 var result = detail.filter((value)=>{
   return value.age<30;
	});

console.log(result);
var data = document.getElementById('app');

let datashow ="";
result.map((item)=>{
         
       datashow += item.name + item.age;
      console.log(datashow);


});

 data.innerText = datashow;


data.addEventListener('click',function(){
	data.innerHTML = "Manish Singh";
	data.style.backgroundColor = "green";
	data.style.fontWeight = "bold";
});

var promiseobj = new Promise((resolve,reject)=>{

	var number = 5;

	if(number < 5){
		resolve("the task is done successfully");
	}else{
		reject("Error the number is greater than 5");
	}
});

promiseobj.then((num)=>{
	console.log(num);
}).then((err)=>{
	console.log(err);
})