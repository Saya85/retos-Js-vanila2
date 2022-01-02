


let num = prompt('escribe un numero');
//let array =[];
let total =1;
for (let i = num; i > 0; i--) {
    console.log(i);
    total = i * total;
}
console.log(total);