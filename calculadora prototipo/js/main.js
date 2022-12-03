var x = Number(prompt("Escribe el primer número: "))
parseInt=(x)
parseFloat=(x)
var y = Number( prompt("Escribe el segundo número: "))
parseInt=(y)
parseFloat=(y)
var u = prompt("¿Que operación desea realizar?")
var z;
if(u == '/'){
    z = x / y
}
if(u == '+'){
    z = x + y
}
if(u == '-'){
   z = x - y
}
if(u == '*'){
   z = x * y
}
document.write('<h1 class="animate__animated animate__bounce animate__rotateInDownLeft">',"El resultado de tu operación es: ",z,'<h1>')