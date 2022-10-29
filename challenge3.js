//buatlah sebuah fungsi yang dapat mengkonversi number menjadi huruf romawi.

function romawi(n){
    //write your code
    let innexpect = [
      { number: 1000, roman:'M'},
      { number: 600, roman:'DC'},
      { number: 400, roman:'CD'},
      { number: 50, roman:'L'},
      { number: 40, roman:'XL'},
      { number: 10, roman:'X'},
      { number: 9, roman:'IX'},
      { number: 6, roman:'VI'},
      { number: 4, roman:'IV'},
      { number: 3, roman:'III'}
    ];

    let romanletter = '';

    for (let i = 0; i < innexpect.length; i++){
         if(innexpect[i].number <= n) {
           n = n - innexpect[i].number;
           romanletter = romanletter + innexpect[i].roman
         }
    }
   return (romanletter) ;    
}

console.log("Script Testing untuk konversi Romawi/n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       |",romawi(4));
console.log("9     | IX       |",romawi(9));
console.log("13    | XIII     |",romawi(13));
console.log("1453  | MCDLIII  |",romawi(1453));
console.log("1646  | MDCXLVI  |",romawi(1646));

/*output
input | expected | result
------|----------|-------
4     | IV       | 4
9     | IX       | 9 
13    | XIII     | 13
1453  | MCDLIII  | 1453
1646  | MCDXLVI  | 1646   */