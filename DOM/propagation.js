var click = document.getElementById('outer');

click.addEventListener('click',function(){
       console.log("Clicked Outer Div");
});

var click2 = document.getElementById('inner');

click2.addEventListener('click',function(event){
       console.log("Clicked Inner Div");
       event.stopPropagation();

});

document.addEventListener('click',function(){
       console.log("Clicked Document");
   });
