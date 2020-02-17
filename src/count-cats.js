module.exports = function countCats(matrix) {
  
let count = 0;

for(let n = 0; n < matrix.length;  n++){

   for(let m = 0; m < matrix[n].length; m++){

   if(matrix[n][m] == "^^"){

   count++;

   }

   }

}
return count;
};
