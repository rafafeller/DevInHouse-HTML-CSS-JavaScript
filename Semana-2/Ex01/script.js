var dia = window.prompt("Que dia é hoje?")
var nome = window.prompt("Digite seu nome?")
var idade = window.prompt("Digite sua idade?")
var esporte = window.prompt("Qual seu esporte favorito?")
var importante = window.prompt("Digite o nome de alguém importante:")
var admira = window.prompt("Digite o nme de alguém que você admira:")

var texto = (`Hoje ${dia}, é um dia histórico. Todos os fãs de ${esporte} estão maravilhados com a proeza realizada pelo atleta ${nome}. ${importante} não conteve as lágrimas ao comentar sobre e uma entrevista e até o (a) ${admira} twittou "é muito bom ver alguém com ${idade} demonstrando tanta habilidade!"`)
window.alert(texto)