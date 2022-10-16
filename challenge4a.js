/*Buatlah sebuah function bernama indexPrime yang memiliki sebuah parameter (asumsi nama parameter 
adalah parameter param1) yang berisi angka. Buat code di di dalam function indexPrima yang menampilkan 
angka prima urutan ke param1.

extra : Gunakan hanya 1 function saja*/

//Drive Code
function indexPrime(param1){
    //write your code
   let arr = [];
   let angka = 1;
   let cek = true;
   
   while(arr.length <= param1){
      cek = true;
    for (let i = 2; i < angka; i++){
      if (angka % i == 0){
          cek = false;
      }
    }
    if (cek == true){
        arr.push(angka);
    }
    angka++;
   }
   return arr[param1];
}

console.log(indexPrime(4)); //result => 7
console.log(indexPrime(500)); //result => 3571
console.log(indexPrime(37786)); //result =>450881


/*Output
7
3571
450881*/