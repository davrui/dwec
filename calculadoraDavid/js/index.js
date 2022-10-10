"use strict"
alert("Use la nueva calculadora");
let operacion = "";
let esCorrecto = false;
do{
do{
    operacion = prompt("¿Que operación desea realizar?");
    if(operacion.trim() === "-" || operacion.trim() === "+" || operacion.trim() === "*" || operacion.trim() === "/" ){
        esCorrecto = true;
    }
}while(!esCorrecto);

let operando1, operando2;
let operadores;
do{
        operadores = prompt("Indica los operadores separados por un espacio");
        operadores = operadores.trim();
        operando1 = Number(operadores.substring(0, operadores.indexOf(' ')));
        operando2 = Number(operadores.substring(operadores.indexOf(' '), operadores.length));
}while(!operando1 || !operando2);
let final;
switch(operacion){
    case "+": final = operando1 + operando2;
    break;

    case "-": final = operando1 - operando2;
    break;

    case "*": final = operando1 * operando2;
    break;

    case "/": final = operando1 / operando2;
    break;
}
alert(final);

}while(confirm("¿Desea realizar alguna operación más?"))