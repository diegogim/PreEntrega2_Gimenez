// Programa para dividir cuentas entre comensales

// Declaración de variables
let numPagadores = 0;
let numComensales = 0;
const pagadores = [];
let totCuenta = 0;
let incluyeServ = "";
let servicio = false;
let valorSer = 0;
let ctaServ = 0;
let ctaPersona = 0;

class Pagadores {
    constructor (nombre, numPersonas){
        this.nombre = nombre;
        this.numPersonas = parseInt(numPersonas);
        this.aPagar = 0;
    }

    calcPago () {
        this.aPagar = ctaPersona * this.numPersonas;
    }

}

//Funciones

// Crear el array de personas a pagar la cuenta
const crearPagadores = () => {
    do{
        numPagadores = parseInt(prompt("¿Entre cuántas personas se dividirá la cuenta?"));
        } while (numPagadores <= 0);
        
        console.log("Total de pagadores: "+ numPagadores);

    b = 0;
    while (b < numPagadores) {
        nombre = prompt('Nombre de la persona ' + (b+1) + ":");
        numPersonas = parseInt(prompt('¿Cuántas personas va a pagar ' + nombre + '?'));
        pagadores.push(new Pagadores(nombre, numPersonas));
        b += 1;
    }
}

// Calcular cuántos comensales hubo
const calcComensales = () => {
    for (const pagador of pagadores){
        numComensales += pagador.numPersonas; 
    }
}

// Pedir el total de la cuenta
const pedirTotCuenta = () => {
    do{
        totCuenta = parseInt(prompt("¿Cuál es el total de la cuenta?"));
        } while (totCuenta <= 0);
    
    console.log("La cuenta es de: $"+totCuenta);
}

// Pedir si incluye propina o no
const pedirPropina = () => {
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
}

// Calcular propina
const calcProp = (a, b) => {
    return a * (1 + b);
}

// Dividir la cuenta entre los comensales
const dividirCuenta = (c, d) => {
    return c / d;
}


// Calcular el monto a pagar por persona que paga
const asignarPago = (a) => {
    for (const pagador of pagadores) {
        pagador.calcPago(a);
        console.log(pagador);
    }
}

// Mostrar el total a pagar por pagador
const displayPago = () => {
    for (const pagador of pagadores) {
        alert('El total a pagar por ' + pagador.nombre + ' es de $' + pagador.aPagar);
    }
}


// Proceso

crearPagadores();

console.log(pagadores);

calcComensales();

console.log('Comensales: ' + numComensales); 

pedirTotCuenta();

pedirPropina();

console.log("El total de la cuenta con servicio incluido es de: $"+ctaServ.toFixed(2));

ctaPersona = dividirCuenta(ctaServ, numComensales).toFixed(2);

asignarPago(ctaPersona);

displayPago();