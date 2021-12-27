import { somar, subtrair, multiplicar, dividir} from "./operacoes.js";

const btnAdicao = document.querySelector(".btnAdicao");
const btnSubtracao = document.querySelector(".btnSubtracao");
const btnMultiplicacao = document.querySelector(".btnMultiplicacao");
const btnDivisao = document.querySelector(".btnDivisao");


const soma = document.querySelector(".resAdicao"); 
const  subtrai = document.querySelector(".resSubtracao"); 
const multiplica = document.querySelector(".resMultiplicacao"); 
const divide = document.querySelector(".resDivisao"); 

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

btnAdicao.addEventListener("click", () => {
    soma.innerHTML = somar(num1.value, num2.value);
    num1.value = "";
    num2.value = "";
    
})

btnSubtracao.addEventListener("click", () => {
    subtrai.innerHTML = subtrair(num1.value, num2.value);
    num1.value = "";
    num2.value = "";
})

btnMultiplicacao.addEventListener("click", () => {
    multiplica.innerHTML = multiplicar(num1.value, num2.value);
    num1.value = "";
    num2.value = "";
})

btnDivisao.addEventListener("click", () => {
    divide.innerHTML = dividir(num1.value, num2.value);
    num1.value = "";
    num2.value = "";
})