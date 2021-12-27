

var corDeFundo = ["#000000", "#1A1A1A", "#1A3D4C", "grenn", "yellowgreen", "aqua"];
var corDosElementosSobrepostos = ["#E6E6E6", "#CCCCCC", "#0D2526"];
var corDoTexto = ["white", "black"];



function start (){

var corDeFundoEscolhido = corDeFundo[getRand(0, corDeFundo.length -1)]
var corDosElementosSobrepostosEscolhido = corDosElementosSobrepostos[getRand(0, corDeFundo.length -1)]
var corDoTextoEscolhido = corDoTexto[getRand(0, corDeFundo.length -1)] 
alteraOsEstilosDaPagina(corDeFundoEscolhido, corDosElementosSobrepostosEscolhido, corDoTextoEscolhido)


}

function getRand(min, max){
    return Math.floor(Math.random()
     * ((max) - min) + min)
}



function alteraOsEstilosDaPagina(corDeFundoEscolhido, corDosElementosSobrepostosEscolhido, corDoTextoEscolhido){

var fundo = document.getElementsByTagName("body")[0];
fundo.style.background = corDeFundoEscolhido;

var sobreposto = document.getElementById("sobreposto");
sobreposto.style.background = corDosElementosSobrepostosEscolhido;

var texto = document.getElementsByClassName("texto")[0];
texto.style.color = corDoTextoEscolhido;

}







