
function calcular() {

    var valorProduto = document.getElementById("valor_produto");
    var descontoProduto = document.getElementById("desconto_produto");

    var valorTotal = Number(valorProduto.value);
    var descontoEmPorcentagem = Number(descontoProduto.value);

    var desconto = (valorTotal * (descontoEmPorcentagem / 100));
    var precoFinal = (valorTotal - desconto)

    res.innerHTML += `<p>O valor total do produto é: ${valorTotal}</p>`;
    res.innerHTML += `<p>O valor do desconto é: ${desconto}</p>`;
    res.innerHTML += `<p>O preço final é: ${precoFinal}</p>`;
}