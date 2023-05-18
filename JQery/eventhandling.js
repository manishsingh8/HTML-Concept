


$('div').on('click',function(){
       alert("welcome");
});

// orhter way to do same

$('div').click(function(event){
	     event.preventDefault();//to stop the anchor tag to go to that website
         alert("hey");
});	

$('#toggle').click(function(){
	alert("hello");
});
$('#toggle').css({
	fontSize:"100px",
	backgroundColor:"green"
});

$('button').click(function(){
	var c = $('#toggle');
	c.html("welcome");
	c.css({
     backgroundColor:"blue",
	});
});
