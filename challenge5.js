/*Buatlah sebuah fungsi untuk memanipulasi string dengan mengikuti aturan sebagai berikut.
  1. Apabila kata diawali huruf vokal,fungsi langsung mengembalikan kata tersebut.
  2. Apabila kata diawali huruf konsonan, hurufkonsonan tersebut dipindahkan ke akhir kata 
     dan menambahkan akhiran 'nyo di katanya.'*/


//Drive Code

function stringManipulation(word){
    //write your code here
    // console.log(word[0])
    if (word[0] === "a" ||  word[0] === "i" || word[0] === "u" || word[0] === "e" || word[0] === "o" ){
        return console.log(word);
    } else {
        return console.log(word.slice(1) + word[0] + "nyo")
    }
}


stringManipulation('ayam'); //"ayam"
stringManipulation('bebek'); //"ebekbnyo"  = ebekb + nyo
stringManipulation('kambing');