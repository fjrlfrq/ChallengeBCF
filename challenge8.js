/*Buatlah sebuah funtion yang menerima string. String tersebut
merupakan suatu pola perhitungan dari beberapa bilangan namun bilangan nya itu
sendiri tidak lengkap. dan tugasmu adalah menebak 1angka yang seharusnya.
sehinggan apabila bilangan tersebut telah lengkap, maka akan membentuk suatu pola perhitungan yang benar.*/

function pola(str) {
  //write your code
  let arr = str.split(" ");
  let angka1 = arr[0];
  let angka2 = arr[2];
  let angka3 = arr[4];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (angka1.replace("#", i) * angka2 == angka3.replace("#", j)) {
        console.log(i, j);
      }
    }
  }
}

console.log(pola("42#3 * 188 = 80#204"));
// result: [8, 5];

console.log(pola("8#61 * 895 = 78410#5"));
//[7, 9]