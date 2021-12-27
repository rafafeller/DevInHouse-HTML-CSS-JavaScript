var somaParticipantes = 0;
var somaIdade = 0;
var mediaIdade = 0;
var somaSatisfeitos = 0;

function iniciarPerguntas() {

    var numeroParticipantes = document.getElementById("numeroParticipantes");
    var idadeParticipantes = document.getElementById("idadeParticipantes");
    var numeroSatisfeitos = document.getElementById("numeroSatisfeitos");


    var nome = prompt("Digite seu nome:");
    var satisfacao = parseInt(prompt("Digite um número de 1 a 10 para expressar sua satisfação:"));
    var idade = parseInt(prompt("Digite sua idade"));
    var satisfeitos = prompt("Podemos incluir você na lista de satisfeitos?(s / n)");
    alert("Salvo com sucesso!");

    somaParticipantes = somaParticipantes + 1
    numeroParticipantes.innerHTML = somaParticipantes;

    somaIdade = somaIdade + idade
    mediaIdade = somaIdade / somaParticipantes
    idadeParticipantes.innerHTML = mediaIdade;

    if (satisfeitos == "s") {
        somaSatisfeitos = somaSatisfeitos + 1
        numeroSatisfeitos.innerHTML = somaSatisfeitos;
    }
}