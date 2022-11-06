const fs = require('fs');
const readline = require('node:readline');

let data = fs.readFileSync('data.json', 'utf-8');
let data1 = JSON.parse(data);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban: '
});

let tanya = 0;
let salah = 1;

if (!process.argv[2]){
    console.log("Tolong sertakan nama file sebagai inputan soalnya\nMisalnya \'node solution.js data.json'\ ");
    process.exit(1);
}

console.log("Selamat datang di permainan tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini 'data.json'.");
console.log("Untuk bermian, jawablah dengan jawaban yang sesuai. \nGunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan kembali lagi.");
console.log(`\nPertanyaan: ${data1[tanya].definition}`);

rl.prompt();

rl.on('line', (line) => {
    if (line.toLowerCase() == 'skip') {
        data1.push(data1[tanya]);
        tanya++
        console.log(`\nPertanyaan: ${data1[tanya].definition}`);
    } else {
        if (line.toLowerCase() == data1[tanya].term) {
            tanya++
            salah = 1;
            console.log('\nAnda Beruntung!');

            if (tanya == data1.length) {
                rl.close();
                process.exit(0)
            } else {
                console.log(`\nPertanyaan: ${data1[tanya].definition}`);
            }
        } else {
            console.log(`\nAnda Kurang Beruntung! Anda telah salah ${salah} kali, silahkan coba lagi.`);
            salah++
        }
    }
    rl.prompt();
}).on('close', () => {
    console.log('\nAnda Berhasil\n');
    process.exit(0);
});