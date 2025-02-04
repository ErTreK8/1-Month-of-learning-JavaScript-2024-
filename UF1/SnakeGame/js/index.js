var canvas;
var context;
window.onload = function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    posXRand=Math.random()*600 + 1;
    posyRand=Math.random()*450 + 1;
    var posX = 30;
    var posY = 30;
    context.fillStyle = 'Red';
    //context.fillRect(posX, posY, 100, 70);

    var image = new Image();
    image.src = './img/fruita.png';
    image.onload = function(){
    context.drawImage(image, posXRand, posyRand, image.width/4, image.height/4);}

  document.addEventListener("keydown", function (evt) {

        var tecla = evt.keyCode;
        if (tecla == 39) // dreta
        {
            context.clearRect(posX, posY, 100, 70);
            posX += 5;
            context.fillRect(posX, posY, 100, 70);
        }
        else if (tecla == 37) // Esquerra
        {
            context.clearRect(posX, posY, 100, 70);
            posX -= 5
            context.fillRect(posX, posY, 100, 70);
        }
        else if (tecla == 38) // arriba
        {
            context.clearRect(posX, posY, 100, 70);
            posY -= 5
            context.fillRect(posX, posY, 100, 70);
        }
        else if (tecla == 40) // abajo
        {
            context.clearRect(posX, posY, 100, 70);
            posY += 5
            context.fillRect(posX, posY, 100, 70);
        }
    });

    canvas.addEventListener("click", function (evt) {
        context.fillRect(evt.clientX, evt.clientY, 30, 30);
    });

    var rect1 = {x: 5, y: 5, width: 50, height: 50}
    var rect2 = {x: 20, y: 10, width: 10, height: 10}

    if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y) {}
}



