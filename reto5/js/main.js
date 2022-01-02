
let num = parseInt(prompt('escribe un numero'));

let reverseString = (str) => {
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
let binario = (num) =>{
    let numBi = '';
   while (num > 1) {
       numBi = numBi + num % 2;
      // console.log(num);
      // console.log(num % 2);
       num = Math.floor(num / 2);
   }
    //console.log(numBi);
    console.log(reverseString(numBi))
}
binario(num);








