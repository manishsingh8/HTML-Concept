var navAncorTags = document.querySelectorAll('.nav-menu a');

// console.log(navAncorTags);

for(var i=0;i<navAncorTags.length;i++){
	navAncorTags[i].addEventListener('click',function(event){
		event.preventDefault();
	
       var targetSectionID = this.textContent.trim().toLowerCase();
       var targetSection = document.getElementById(targetSectionID);
       console.log(targetSection);
      
      var interval = setInterval(function(){
       var targetSectionCoordinates = targetSection.getBoundingClientRect();
        if(targetSectionCoordinates.top <=0){
        	clearInterval(interval);
        	return;
        }
        window.scrollBy(0,50);
      },50);


	});
};





var progressBars = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

console.log(progressBars);


function initializeBars(){
	for(var  bar of progressBars){
		bar.style.width = 0 + '%';
	}
}

initializeBars();



function fillBars(){

	for(let bar of progressBars){
		let targetWidth = bar.getAttribute('data-bar-wodth');
		//console.log(targetWidth);
		let currentWidth = 0;
		let interval = setInterval(function(){
             // console.log(targetWidth);
           if(currentWidth > targetWidth){
           	clearInterval(interval);
           	return;
           }
           currentWidth++;
           bar.style.width = currentWidth + '%';
		},30);
	}

}




function checkScroll(){
	var coordinates = skillContainer.getBoundingClientRect();
	 if (!animationDone && coordinates.top < window.innerHeight) {
		animationDone = true;
		// console.log('skill visible');
		  fillBars();

}
}