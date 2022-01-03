/* Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.
El cambio de divisas es:
• 0.86 libras es un 1 €
• 1.28611 $ es un 1 €
• 129.852 yenes es un 1 € */

let euro = parseFloat(prompt('cuanto quieres descambiar?'));
let moneda = prompt('libra, dolares, yenes').toLowerCase();
 let transformaMoneda = (euro, moneda) => {
     switch (moneda) {
        case 'libra':
            console.log(`${euro} euro/s en libras son ${euro*0.86} libras`);
            break;
        case 'dolares':
            console.log(`${euro} euro/s en dolares son ${euro*1.13} dolares`);
            break;
        case 'yenes':
            console.log(`${euro} euro/s en yenes son ${euro*129.852} yenes`);
            break;

        default:
            console.log('la moneda introducida no esta disponible');
            break;
    }
 }
transformaMoneda(euro, moneda);
 
    