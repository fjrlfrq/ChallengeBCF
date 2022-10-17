/*buatlah sebuah fungsi yang mengalikan anggota dalam angka tersebut, hingga nili terakhir terdiri dari 1 digit.*/

//Driver code
function weirdMultiply(sentence) {
    //write your code
    let text = sentence.toString();
    let j = 1;
    for(let i = 0; i < text.length; i++){
        j *= text[i];
    }
    if (j.toString().length === 1){
        return j;
    } else {
        return weirdMultiply(j);
    }
}

console.log(weirdMultiply(39)); //-> 3 * 9 = 27 ->2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); //-> 9 * 9 * 9 =729 -> 7 * 2 * 9 =126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit

