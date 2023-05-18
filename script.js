 let array = [3,9,18,3,28,6,17,9];
      let index = 0, newArr = [];
      const length = array.length;
         for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length; j++) {
            if (array[i] == array[j]) {
                  newArr[index] = array[i];
                  index++;
               }
            }
         }
       
      for(var i=0;i<length;i++){
      	console.log(newArr[i]);
      }

      
function createPyramid(rows)
{
       for (let i = 0; i < rows; i++) {
            var output = '';
        for (let j =0; j < rows - i; j++) 
        	output += ' ';
        for (let k = 0; k <= i; k++)
            output += '* ';
        console.log(output);  
    } 
}
createPyramid(7);





