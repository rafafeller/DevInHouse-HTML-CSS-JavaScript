

var acesa = false;
var lampStatus;


    lampStatus = document.getElementById('lampada');
    setTimeout(acendeLampada, 5000);


function acendeLampada(){
    lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png"
}

