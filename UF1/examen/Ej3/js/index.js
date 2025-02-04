



window.onload = function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    var image = new Image();
    image.src = './img/ratoli.png';
    image.onload = function(){
    context.drawImage(image, 850, 550, 50, 50);}
    context.fillStyle = 'Black';
    context.fillRect(150,0,15,500)
    context.fillRect(300,200,15,500)

    var posX = 10;
    var posY = 10;
    context.fillStyle = 'gray';
    catsize=10;
    document.addEventListener("keydown", function (evt) {

        var tecla = evt.keyCode;
        if (tecla == 39) // dreta
        {
            context.clearRect(posX, posY, catsize, catsize);
            posX += 15;
            context.fillRect(posX, posY, catsize, catsize);
        }
        else if (tecla == 37) // Esquerra
        {
            context.clearRect(posX, posY, catsize, catsize);
            posX -= 15
            context.fillRect(posX, posY, catsize, catsize);
        }
        else if (tecla == 38) // arriba
        {
            context.clearRect(posX, posY, catsize, catsize);
            posY -= 15
            context.fillRect(posX, posY, catsize, catsize);
        }
        else if (tecla == 40) // abajo
        {
            context.clearRect(posX, posY, catsize, catsize);
            posY += 15
            context.fillRect(posX, posY, catsize, catsize);
        }
        
        if(((posX==145 || posX==160) && posY<504) || ((posX==295 || posX==310) && posY>190))
        {
            context.clearRect(posX, posY, catsize, catsize);
            posX = 10;
            posY = 10;
            context.fillRect(posX, posY, catsize, catsize);   
        }

        console.log(posX)

        if((posY>549 && posY<601) && (posX>849 && posX<901))
        {
            context.clearRect(posX, posY, catsize, catsize);
            catsize=catsize*2;
            context.fillRect(posX, posY, catsize, catsize);   

        }
    });
}