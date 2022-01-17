/* Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
rellenar valores y otro para mostrar. */



let llenar = (array) => {
    for (let i = 0; i < 10; i++) {
        array.push(parseInt(prompt(`pon un numero: (${i})`)));
    }
    return array;
}
let mostrar = (array) =>{
    for (let i = 0; i < array.length; i++) {
        console.log(`index: ${i}: ${array[i]}`);
    }
}
llenar(array);
mostrar(array);

let array = [];

