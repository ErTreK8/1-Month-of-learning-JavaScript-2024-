




window.onload = function () {
    document.addEventListener("click", function (evt) 
    {
        radiobutton();
    });
}

function radiobutton()
{
    var elementos = document.getElementsByName("sexe");
    for(var i=0; i<elementos.length; i++) {
        if(elementos[i].checked==true)
        {
            var seleccion = elementos[i];
        }
    }
    if (seleccion.value=='H')
    {
        var conte =document.getElementById('contenedor');
        conte.innerHTML="<img src='./img/hombre.jpg'>"
    }
    else
    {
        var conte =document.getElementById('contenedor');
        conte.innerHTML="<img src='./img/mujer.jpg'>"
    }
}