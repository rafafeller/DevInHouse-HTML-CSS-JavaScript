/*const valorProduto = document.getElementById("valor_produto");
const descontoProduto = document.getElementById("desconto_produto");

function calcular() {
    
    let valorTotal = Number(valorProduto.value);
    let descontoEmPorcentagem = Number(descontoProduto.value);

    let desconto = (valorTotal * (descontoEmPorcentagem / 100));
    let precoFinal = (valorTotal - desconto)

    res.innerHTML += `<p>O valor total do produto é: ${valorTotal}</p>`;
    res.innerHTML += `<p>O valor do desconto é: ${desconto}</p>`;
    res.innerHTML += `<p>O preço final é: ${precoFinal}</p>`;
}*/

function calcular() {

    let valorProduto = document.getElementById("valor_produto");
    let descontoProduto = document.getElementById("desconto_produto");

    let valorTotal = Number(valorProduto.value);
    let descontoEmPorcentagem = Number(descontoProduto.value);

    let desconto = (valorTotal * (descontoEmPorcentagem / 100));
    let precoFinal = (valorTotal - desconto)

    res.innerHTML += `<p>O valor total do produto é: ${valorTotal}</p>`;
    res.innerHTML += `<p>O valor do desconto é: ${desconto}</p>`;
    res.innerHTML += `<p>O preço final é: ${precoFinal}</p>`;
}

