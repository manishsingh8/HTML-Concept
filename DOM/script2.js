var mouseOut = document.getElementById('outer');

mouseOut.addEventListener('mouseout',function(){
       console.log("mouseout");
});

mouseOut.addEventListener('mouseover',function(){
       console.log("mouseover");
});

// keyboard event

var  keyBoard = document.getElementById('search');

    // keyBoard.addEventListener('keypress',function(){
    //    console.log("keypressed");
    // });

// the keypress ony work on alfabets and numbers not in shift space and updown alt keys so we use keydown for that

keyBoard.addEventListener('keydown',function(){
       console.log("keydown");
    });

keyBoard.addEventListener('keydown',function(event){
       console.log(event.keyCode);//it will return the ascii value of key you pressed
    });

// in case we want to count after press anywhere in the doument use this
document.addEventListener('keypress',function(){
        console.log("keypressed");
});