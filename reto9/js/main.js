/* Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un
método para rellenar el array(que tenga como parámetros los números entre los que
tenga que generar) y otro para mostrar el contenido y la suma del array. */

let añadir = (cantidad, array) => {
    for (let i = 0; i < cantidad; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
}

let sumaArray = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

let cantidad = parseInt(prompt('pon una cantidad:'));
let array = [];

añadir(cantidad, array);
console.log('el total de la array es:', sumaArray(array));
