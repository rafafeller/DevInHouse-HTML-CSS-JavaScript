
var val1 = document.querySelector("#valor1");
var val2 = document.querySelector("#valor2");
var res = document.getElementById("res");

function somar() {
    
res.innerHTML = parseInt(val1.value) + parseInt(val2.value)
}
function subtrair() {
   
    res.innerHTML = parseInt(val1.value) - parseInt(val2.value)
}
function multiplicar() {
    
    res.innerHTML = parseInt(val1.value) * parseInt(val2.value)
}
function dividir() {
    
    res.innerHTML = parseInt(val1.value) / parseInt(val2.value)
}