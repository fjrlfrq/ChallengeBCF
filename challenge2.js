/*buatlah sebuah function deret bilangan kelipatan 3 yang mengembalikan sebuah array dengan panjang
array yang dinamis sehingga fungsi tersebut akan menerima parameter number yang akan menjadi nilai dari 
panjang array yang akan dikeluarkan.
Deret bilangan ini mengikuti aturan sebagai berikut :
1.yang apabila habis dibagi dengan 5 ccetak "KAS"
2.yang apabila habis dibagi dengan 6 cetak  "KUS"
3.yang apabila habis dibagi dengan 5 dan 6 cetak "KASKUS"*/

const deretKaskus = (n) =>{
    //write code here
    let result = ""
    let array =[];
    let angka = [];

    for(let i = 1;  i <= n; i++){
      let kelipatan = i * 3
      angka.push(kelipatan)
    }

    for (let i = 0; i < n; i++) {
        let jumlah = angka[i]
        if (jumlah % 5 === 0 && jumlah % 6 ===0){
            result = "KASKUS";
        } else if (jumlah % 6 === 0){
            result = "KUS";
        } else if (jumlah % 5 === 0) {
            result = "KAS";
        } else {
            result = jumlah
        }
        array.push(result)
    }
    return array
}

console.log(deretKaskus(10));
console.log(deretKaskus(5));

//output
//[3, "KUS", 9, "KuS", "KAS", "KUS", 21, "KUS", 27, "KASKUS"]