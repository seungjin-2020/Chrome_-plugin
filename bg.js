const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src=`/background-imgs/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
}

function genRandom(){
    const number = Math.floor(Math.random()*5);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();