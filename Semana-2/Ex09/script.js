
var palavra = "";
var lista = [];

while (palavra != "parar"){
    palavra = prompt("Você está num ciclo de palavras. Digite parar quando quiser ver as palavras digitadas");
    lista.push(palavra)    
}

lista.sort().reverse();

lista.forEach(palavra => {
    document.querySelector("body").innerHTML += `<section><h1>${palavra}</h1></section>`;
    
})
