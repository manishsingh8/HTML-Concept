// console.log(x);
// var x=10;

// console.log(z);
// const z =10;//it'll show an error that z is not defined


// let keyword

// var a =10;

// if(a<10){
// 	let b =30;//here scope of b is within the if block
// 	//we can't use b out of if block;

// }else{
// 	var c =20;
// }

// console.log(a,b,c);

var a =20;

if(a<=20){
	//console.log(b);
	let b =60;//here we are using b before intializing b 
	//so here we get the error that we can't use b before 
	//it's initialization same as cons variable;
	console.log(b);

}else{
	var c =20;
}

// var vs let

for(let i=1 ;i<=5;i++){

	setTimeout(function(){
       console.log(i);
	},1000);
			    
};

// console.log("out"+i);