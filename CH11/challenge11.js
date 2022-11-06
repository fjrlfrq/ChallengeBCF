/*
Buatlah sebuah permainan tebak kata, gunakan file data json untuk
menyimpan daftar pernyataan dan jawaban. file data json sudah disertakan di github.
*/

const fs = require('fs');
const readline = require('node:readline');

const data = fs.readFileSync('data.json', 'utf-8');
const data1 = JSON.parse(data);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: '
});

let tanya = 0;

console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya!');
console.log(`Pertanyaan: ${data1[tanya].definition}`);

rl.prompt();
rl.on('line', (line) => {
    if (tanya < data1.length - 1) {
        if (line.trim().toLowerCase() == data1[tanya].term) {
            tanya++;
            console.log('Selamat Anda Benar!');
            console.log(`Pertanyaan: ${data1[tanya].definition}`);
        } else {
            console.log('Wkwkwk, Anda kurang beruntung!');
        }
    } else if (line.trim().toLowerCase() == data1[tanya].term) {
        rl.close();
        process.exit(0);
    } else {
        console.log("Wkwkwk anda kurang beruntung");
    }
    rl.prompt();
}).on('close', () => {
    console.log('Hore Anda Menang!');
});

//output
//jawaban dari term dari file data.json