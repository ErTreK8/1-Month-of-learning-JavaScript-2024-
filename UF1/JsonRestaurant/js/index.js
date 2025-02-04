var restaurants={
    "estado": 1,
    "restaurantes": [
       {
          "idRestaurante": 1,
          "nombre": "100Montaditos",
          "opinion": "Tapas económicas, muy lleno",
          "latitud": 41.608708,
          "longitud": 2.289943,
          "tipoCocina": "Tapas",
          "puntuacion": 3.8
       },
       {
          "idRestaurante": 2,
          "nombre": "Cuynes",
          "opinion": "Diseño bonito pero nunca tienen los vinos de la carta",
          "latitud": 41.608708,
          "longitud": 2.289943,
          "tipoCocina": "Catalana",
          "puntuacion": 4.1
       },
       {
          "idRestaurante": 3,
          "nombre": "Portalet",
          "opinion": "Platos de degustación asequibles",
          "latitud": 41.607308,
          "longitud": 2.287563,
          "tipoCocina": "Catalana",
          "puntuacion": 4.7
       },
       {
          "idRestaurante": 4,
          "nombre": "Anima",
          "opinion": "Número 1 en Granollers según TripAdvisor",
          "latitud": 41.607308,
          "longitud": 2.287563,
          "tipoCocina": "Catalana, Vegetariana",
          "puntuacion": 4.9
       }
    ]
   };
// se pone fuera del onload para que lo puedan leer todas las funciones

window.onload = function(){
    
    escriuNomsRestaurants();

}


function escriuNomsRestaurants(){
  
    var arrayRest= restaurants.restaurantes;
    for (var i=0; i<arrayRest.length; i++)
    {
        // Crear la variable en el for para que salgan todos porque si no solo crea 1 y no furula
        // porque creas solo 1 etiqueta p y entonces te la va machacando y no furula
        // esto es por el create element que crea varias por cada for crea 1 element y pues creara los 4 q hay locura
        var pname= document.createElement("p");
        var opinio= document.createElement("p")
        var br=document.createElement("br");
        pname.innerHTML=arrayRest[i].nombre;
        opinio.innerHTML=arrayRest[i].opinion;
        document.body.appendChild(pname);
        document.body.appendChild(opinio);
        document.body.appendChild(br)
    }

        var tabla = document.createElement("table");
        var fila = tabla.insertRow(0);
            fila.insertCell(0).innerHTML = "Nombre";
            fila.insertCell(1).innerHTML = "Tipo de Cocina";
            fila.insertCell(2).innerHTML = "Opinion";
            fila.insertCell(3).innerHTML = "Puntuacio";
        //Primera fila de capçalera
        
        for(var i=0; i<arrayRest.length; i++)
        {
            var fila = tabla.insertRow(i+1);
            fila.insertCell(0).innerHTML = arrayRest[i].nombre;
            fila.insertCell(1).innerHTML = arrayRest[i].tipoCocina;
            fila.insertCell(2).innerHTML = arrayRest[i].opinion;
            fila.insertCell(3).innerHTML = arrayRest[i].puntuacion;
        }
        tabla.style="border: 1px solid BLACK;";
        fila.style="border: 1px solid BLACK;";
        document.body.appendChild(tabla);

}
