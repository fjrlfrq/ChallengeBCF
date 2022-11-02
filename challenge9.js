/*Buat sebuah function bernama spiral yang memiliki sebuha parameter (asumsi nama parameter adalah param1)
yang berisi angka. Setelah itu, generate secara otomatis array sebanyak param1xparam1 dan menampilkan
juga urutan angka sesuai dengan pola spiral. Lihat contoh dibawah ini:Driver Code: */ 

function spiral(param1) {
    //write your code here
    let count = 0;
    let result = [];
    
    for (let i = 0; i < param1; i++) {
      result[i] = [];
      for (let j = 0; j < param1; j++) {
        result[i][j] = count;
        count++;
      }
    }
    
    let k = 0;
    let l = 0;
    let arrAtas = param1;
    let arrBawah = 0;
    
    let arr = [];
  
    while (arr.length < param1 * param1) { 
    
      for (; k < arrAtas; k++) { 
        arr.push(result[l][k]); 
      } 
      k--; 
      l++; 
      
      for (; l < arrAtas; l++) { 
        arr.push(result[l][k]); 
      } 
      l--; 
      k--; 
      
      for (; k >= arrBawah; k--) { 
        arr.push(result[l][k]); 
      } 
      k++; 
      l--;
      
      for (; l > arrBawah; l--) { 
        arr.push(result[l][k]); 
      } 
      k++; 
      l++; 
      arrBawah++; 
      arrAtas--; 
    } 
  
    console.log(arr);
  }

spiral(5);
spiral(6);
spiral(7);

//OUTPUT
[0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5, 6, 7, 8, 13, 18, 17, 16, 11, 12]
[0, 1, 2, 3, 4, 5, 11, 17, 23, 29, 35, 34, 33, 32, 31, 30, 24, 18, 12, 6, 7, 8, 9, 10, 16, 22, 28, 27, 26, 25, 19, 13, 14, 15, 21, 20]
[0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48, 47, 46, 45, 44, 43, 42, 35, 28, 21, 14, 7, 8, 9, 10, 11, 12, 19, 26, 33, 40, 39, 38, 37, 36, 29, 22, 
15, 16, 17, 18, 25, 32, 31, 30, 23, 24] 