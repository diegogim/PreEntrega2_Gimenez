// Programa para dividir cuentas entre comensales

// Declaración de variables
let numComensales = 0;
let totCuenta = 0;
let incluyeServ = "";
let servicio = false;
let valorSer = 0;
let ctaServ = 0;
let ctaPersona = 0;

//Funciones
const calcProp = (a, b) => {
    return a * (1 + b);
}

const dividirCuenta = (c, d) => {
    return c / d;
}

// Proceso

do{
numComensales = parseInt(prompt("¿Entre cuántas personas se dividirá la cuenta?"));
} while (numComensales <= 0);

console.log("Total de comensales: "+numComensales);

do{
    totCuenta = parseInt(prompt("¿Cuál es el total de la cuenta?"));
    } while (totCuenta <= 0);

console.log("La cuenta es de: $"+totCuenta);

do{
    incluyeServ = prompt("¿La cuenta incluye servicio? (Y/N)");
    incluyeServ = incluyeServ.toUpperCase();
    if(incluyeServ == 'Y'){
        servicio = true;
        console.log("La cuenta ya incluye servicio");
    }
    else if(incluyeServ == 'N'){
        servicio = false;
        console.log("La cuenta no incluye servicio");
    }
    else{
        incluyeServ = 'Error';
    }
} while (incluyeServ == 'Error');

if(servicio == false){
    do{
        valorSer = parseFloat(prompt("¿Cuánto deseas incluir de servicio? (En decimales)"));
    } while((valorSer < 0) || (valorSer > 1));
    console.log("El servicio a incluir es de: "+(valorSer*100)+"%");
    ctaServ = calcProp(totCuenta, valorSer)
}
else{
    ctaServ = totCuenta;
}

console.log("El total de la cuenta con servicio incluido es de: $"+ctaServ.toFixed(2));

ctaPersona = dividirCuenta(ctaServ, numComensales).toFixed(2);
alert("El total a pagar por persona es de $"+ctaPersona);