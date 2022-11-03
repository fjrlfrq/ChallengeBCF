//implementasikan penggunaan readline pada fungsi yang telah dibuat di challenge #6

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini > '
});

rl.prompt();

rl.on('line', function (sentence) {
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
    console.log(`hasi konversi: ${arry.join(" ")}`);
  rl.prompt();
}).on('close', () => {
  console.log('Good bye!');
  process.exit(0);
});