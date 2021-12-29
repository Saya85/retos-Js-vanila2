

// calculo de area 

function areas(figura){

    switch (figura) {
        case 'circulo':
            let radio = parseInt(prompt('escribe el radio'));
            let areaCirculo = radio * radio * pi;
            console.log(`el area del circulo es ${areaCirculo}`);
            break;

        case 'triangulo':
            let base = parseInt(prompt('escribe la base'));
            let altura = parseInt(prompt('escribe la altura'));
            let areaTiangulo = (base * altura) / 2;
            console.log(`el area del triangulo es ${areaTiangulo}`);
            break;

        case 'cuadrado':
            let lado1 = parseInt(prompt('escribe lado 1'));
            let lado2 = parseInt(prompt('escribe lado 2'));
            let areaCuadrado = lado1 * lado2;
            console.log(`el area del cuadrado es ${areaCuadrado}`);
            break;

        default:
            console.log(`no esta esta figura, recuerda que debe ser un circulo, triangulo o cuadrado`)
            break;
    }

}
