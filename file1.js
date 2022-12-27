function binarySearch(n, i, j) {
   let mid = (i + j) / 2;
   let mul = mid * mid;
   if ((mul === n) || (Math.abs(mul - n) < 0.00001)) {
      return mid;
   } else if (mul < n) {
      return binarySearch(n, mid, j);
   } else {
      return binarySearch(n, i, mid);
   }
}
function findSqrt(num) {
   let i = 1;
   while (true) {
      if (i * i === num) {
         return i;
      } else if (i * i > num) {
         let res = binarySearch(num, i - 1, i);
         return res;
      };
      i++;
   }
}

function multiply(mat1, mat2, res) {
   let i, j, k;
   for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
         res[i][j] = 0;
         for (k = 0; k < 4; k++)
            res[i][j] += mat1[i][k] * mat2[k][j];
      }
   }
}
function convertToBinary(x) {
   let bin = 0;
   let rem, i = 1;
   while (x != 0) {
       rem = x % 2;
       x = parseInt(x / 2);
       bin = bin + rem * i;
       i = i * 10;
   }
   console.log("Binary: " + bin);
}
function middleElement(){
   var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
   if(arr.length % 2 != 0){
      var middle = arr[Math.floor(arr.length / 2)];
      console.log("Middle element: " + middle);
   }
   else {
      var middle = arr[Math.floor((arr.length -1) / 2)];
      var middle2 = arr[Math.floor(arr.length / 2)];

      console.log("Middle elements: " + middle+" , "+middle2);
   }
   
}
