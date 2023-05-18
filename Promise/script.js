// console.log(" Learning promise");
// var userLoggedIn = true;
// function checkUserLoggedIn(){
// 	var promise = new Promise( (resolve ,reject) =>{
// 	setTimeout(()=>{
// 		   if(userLoggedIn){//this funciton will execute if userLoggedIn is true
// 		   console.log("resolved");
//            resolve("userLoggedIn");//here we are passing argument to resolve fun
//        }else{
//           console.log("reject");
//           reject();
//        }
// 	},1000);
// });
// 	return promise;
// };
// checkUserLoggedIn().then((successMsg)=>{//catching the successmsg here from resolve
//      console.log(successMsg);
// }).catch(() =>{//this catch for reject function that will called if the task is unsuccessfull
//        console.log("unsuccessfull");
// });


  const pobj = new Promise((resolve,reject)=>{

    setTimeout(()=>{
            let arr = ['manish','akshay','sandeep'];
            resolve(arr);
    },2000);

  });
   
   pobj.then((name)=>{
      console.log(name);
   });