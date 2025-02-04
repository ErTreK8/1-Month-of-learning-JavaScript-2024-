function radiobutton()
{
    var elementos = document.getElementsByName("pregunta");
    for(var i=0; i<elementos.length; i++) {
        alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
    }
}

function A() {
 var elemento = document.getElementById("texto");
 if(elemento.value == 'A' ) 
 {
    elemento.style.backgroundColor = 'red';
 }
 else {
    elemento.style.backgroundColor = 'green';
 }
}