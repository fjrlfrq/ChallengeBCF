/*Buatlah sebuah fungsi yang dapat menjumlahkan semua parameter yang dimasukkan
ke ddalam fungsi tersebut.*/

zsum(){
    //write code here
  let amount = 0;
    for (let j = 0; j < arguments.length; j++) {
        let a = arguments[j];
        amount += a;
    } return amount;
}



console.log(sum(1,2,7));
console.log(sum(1,4));
console.log(sum(11));
console.log(sum(10,3,6,7,9));

/*Output
10
5
11
35 */
