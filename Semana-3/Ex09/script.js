

var acesa = false;
var lampStatus;

    lampStatus = document.getElementById('lampada');
    setInterval(ligaDesliga, 2000);

function ligaDesliga() {

    var lampStatus = document.getElementById("lampada");

    if (!acesa) {
        lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png"
        acesa = true;
    } else {
        lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png"
        acesa = false;
    }
}

