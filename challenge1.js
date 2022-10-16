function sum(){
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
