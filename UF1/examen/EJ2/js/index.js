var noms={
    "nombres":[
        {"nombre":"JAVIER","genero":"H"},
        {"nombre":"JOAN", "genero":"H"},
        {"nombre":"JORGE", "genero":"H"},
        {"nombre":"PEDRO", "genero":"H"},
        {"nombre":"MIGUEL", "genero":"H"},
        {"nombre":"RAMON", "genero":"H"},
        {"nombre":"JOSEP", "genero":"H"},
        {"nombre":"ALEJANDRO", "genero":"H"},
        {"nombre":"ALBERT", "genero":"H"},
        {"nombre":"JOSE MARIA", "genero":"H"},
        {"nombre":"SERGIO", "genero":"H"},
        {"nombre":"LUIS", "genero":"H"},
        {"nombre":"XAVIER", "genero":"H"},
        {"nombre":"OSCAR", "genero":"H"},
        {"nombre":"ALBERTO", "genero":"H"},
        {"nombre":"ALEX", "genero":"H"},
        {"nombre":"IVAN", "genero":"H"},
        {"nombre":"JESUS", "genero":"H"},
        {"nombre":"MARIA", "genero":"M"},
        {"nombre":"MONTSERRAT", "genero":"M"},
        {"nombre":"MARTA", "genero":"M"},
        {"nombre":"LAURA", "genero":"M"},
        {"nombre":"NURIA", "genero":"M"},
        {"nombre":"CRISTINA", "genero":"M"},
        {"nombre":"ANA", "genero":"M"},
        {"nombre":"ANNA", "genero":"M"},
        {"nombre":"ROSA", "genero":"M"},
        {"nombre":"SILVIA", "genero":"M"}
    ]
}

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

function clicar()
{
    var elementos = document.getElementsByName("sexe");
    for(var i=0; i<elementos.length; i++) {
        if(elementos[i].checked==true)
        {
            var seleccion = elementos[i];
        }
    }
    var nombre = document.getElementById("texto");

    var arrayNoms = noms.nombres;
    var i=0;
    var encontrado=false;
    var finalText=document.getElementById("textFinal");

    while (i<arrayNoms.length && encontrado==false)
    {
       if(nombre.value==arrayNoms[i].nombre && seleccion.value==arrayNoms[i].genero)
        {
            var sexo
            if (seleccion.value=='H')
            {
                sexo="Home"
            }
            else
            {
                sexo="Dona"
            }
            finalText.innerHTML= nombre.value + " és un nom de " + sexo;
            encontrado=true;
        }
        else
        {
            finalText.innerHTML= "No conec el nom";
        }
        i++;
        
    }
}

