"use strict"
alert("Use la nueva calculadora");
let operacion = "";
let esCorrecto = false;
do {
    pedirOperacion();
    if(operacion === null) {
        break;
    }
    let operando1, operando2;
    let operadores;
    let valores = function pedirOperandos() {
        do {
                operadores = prompt("Indica los operadores separados por un espacio");
              if(operadores === null) {
                    break;
                }
                operadores = operadores.trim();
                operando1 = Number(operadores.substring(0, operadores.indexOf(' ')));
                operando2 = Number(operadores.substring(operadores.indexOf(' '), operadores.length));
                if(!operando1 || !operando2) {
                    alert("Los datos introducidos no son correctos");
                }
        } while(!operando1 || !operando2);
    
    
    }
    if(operacion != null){
        valores(); 
        if(operadores === null) {
            break;
        }   
    }
    let calcSum =(operando1, operando2) => operando1 + operando2;
    let calcRest =(operando1, operando2) => operando1 - operando2;
    let calcMult =(operando1, operando2) => operando1 * operando2;
    let calcDivi =(operando1, operando2) => operando1 / operando2;



switch(operacion) {
    case "+": alert(calcSum(operando1, operando2));
    break;

    case "-": alert(calcRest(operando1, operando2));
    break;

    case "*": alert(calcMult(operando1, operando2));
    break;

    case "/": alert(calcDivi(operando1, operando2));
    break;
}

} while(confirm("¿Desea realizar alguna operación más?"));

function pedirOperacion() {
    do {
        operacion = prompt("¿Que operación desea realizar?");
        if(operacion === null) {
            break;
        }
        if(operacion.trim() === "-" || operacion.trim() === "+" || operacion.trim() === "*" || operacion.trim() === "/" ){
            esCorrecto = true;
        }
        if(!esCorrecto) {
            alert("Los datos introducidos no son correctos");
        }
    } while(!esCorrecto);
    
}


