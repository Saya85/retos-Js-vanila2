/* Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios primos entre los números deseados, por último, nos indicar cual
es el mayor de todos. Haz un método para comprobar que el número aleatorio es
primo, puedes hacer todos los métodos que necesites. */



let tamañoArray = parseInt(prompt('De cuantos numeros será la array?'));

let numArray = [];

let numMayor = 0;

for (let i = 0; i < tamañoArray; i++) {
    numArray.push(Math.floor(Math.random() * 10 + 1));
    if (numMayor < numArray[i]) {
        numMayor = numArray[i];
    }
} 

document.write(numArray + '<br>');
document.write(numMayor);