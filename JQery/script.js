

// // normal javascript code to change text

// var para = document.getElementById('para1');
// para.innerHTML ="welcome";


// jquerycode to change text;

 $('#para1').html("welcome1");//fetch by id

// $('.para2').hide();fetch by className

$('p').html("hey!!");//to get all p tag

var p = $('p');

p.css('color','blue');

$('div').css({

     width:"100px",
     height:"100px",
     backgroundColor:"red"

});

// $( "div" ).on( "mouseenter mouseleave", function() {
//     console.log( "mouse hovered over or left a div" );
// });

// multiple events

$( "div" ).on({
    mouseenter: function() {
        console.log( "hovered over a div" );
    },
    mouseleave: function() {
        console.log( "mouse left a div" );
    },
    click: function() {
        console.log( "clicked on a div" );
    }
});

$( "p" ).one( "click", function() {
    console.log( "You just clicked this for the first time!" );
    $( this ).click(function() {
        console.log( "You have clicked this before!" );
    });
});


// $( "a" ).trigger( "click" );