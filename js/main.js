let numero = parseInt(prompt("ingrese un numero"));

while (numero <= 50){
    alert("Su numero es: " + numero)
    numero = numero + parseInt(prompt( "Ingrese otro numero"))
 
}
alert("Su numero es " + numero + ", ciclo finalizado por numero mayor a 50")

let palabra = prompt("ingrese una palabra");

while (palabra != 'ESC'){
    alert("Su palabra es: " + palabra)
    palabra2 = prompt( "Ingrese otra palabra")
    if (palabra2 == 'ESC'){
        break;
    }
    palabra = palabra + palabra2;
 
}
alert("Su palabra final es " + palabra)



let cantidad = parseInt(prompt("Ingresar un numero"));

for(let i = 0;i < cantidad; i++){
    alert("Hola" + (i+1));
}
