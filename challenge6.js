/*Buatlah sebuah fungsi untuk memanipulasi kalimat dengan mengikuti aturan pada tantangan sebelumnya
(tantangan ke-5)*/

function sentencesManipulation(sentence) {
    //write yout code here
    let arr = sentence.split(" ");
    let arry = [];
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        if (arr[i][j] === "a" || arr[i][j] == "i" || arr[i][j] == "u" || arr[i][j] == "e" || arr[i][j] == "o") {
            arry.push(arr[i]);
        } else {
            arry.push(arr[i].substring(1) + arr[i][j] + "nyo");
        } 
    } 
    console.log(arry.join(" "));
}

sentencesManipulation('ibu pergi ke pasar bersama aku');

/*output
'ibu ergipnyo eknyo asarpnyo ersamabnyo aku'*/

