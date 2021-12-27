

function enviar() {
    var numero = document.getElementById("numero").value;
    var res = document.getElementById("res");
    if (numero % 2 == 0) {
        res.innerHTML = "O número digitado é par."
    } else {
        res.innerHTML = "O número digitado é impar."
    }
}