

function fetchRandomDogImage(){


// using jquery
	// var xhrRequest = new XMLHttpRequest();

	// xhrRequest.onload = function(){
	// 	console.log(xhrRequest.response);
		
	// 	var responseJSON = JSON.parse(xhrRequest.response);

	// 	var imgurl = responseJSON.message;

	// 	$('#dog-image').attr('src',imgurl);
	// };
 //        xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
 //        // here true for asynchronous request ans false for synchronous request  
 //        xhrRequest.send();


// using Ajax
   //      $.ajax({
   //      	url:'https://dog.ceo/api/breeds/image/random',
   //      	method:'GET',
   //      	success: function(data){

			// var imgurl = data.message;

			// $('#dog-image').attr('src',imgurl);

   //      	}
   //      });

     // for get request
     $.get('https://dog.ceo/api/breeds/image/random',function(data){

			var imgurl = data.message;

			$('#dog-image').attr('src',imgurl);
           
			});   

	
}

$('#fetch-dog-image').click(fetchRandomDogImage);

