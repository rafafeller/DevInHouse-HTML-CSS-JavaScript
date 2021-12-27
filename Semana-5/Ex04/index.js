import { Endereco } from "./classes.js"

const btnSubmitCliente = document.querySelector(".btnSubmitCliente");
const btnSubmitEmpresa = document.querySelector(".btnSubmitEmpresa");
const btnSubmitLoja = document.querySelector(".btnSubmitLoja");

function salvaNoLocalStorage(keyEndereco, valueEndereco) {
    localStorage.setItem(keyEndereco, JSON.stringify(valueEndereco));
}

btnSubmitCliente.addEventListener("click", function () {

    var enderecoCliente = criarEndereco("cliente");

    salvaNoLocalStorage("keyCliente", enderecoCliente)
})

btnSubmitEmpresa.addEventListener("click", function () {

    var enderecoEmpresa = criarEndereco("empresa")

    salvaNoLocalStorage("keyEmpresa", enderecoEmpresa)
})

btnSubmitLoja.addEventListener("click", function () {

    var enderecoLoja = criarEndereco("loja")

    salvaNoLocalStorage("keyLoja", enderecoLoja)
})

function criarEndereco(idForm) {

    var form = document.getElementById(idForm);

    var rua = form.querySelector(".rua").value;
    var numero = form.querySelector(".numero").value;
    var cidade = form.querySelector(".cidade").value;
    var estado = form.querySelector(".estado").value;
    var pais = form.querySelector(".pais").value;
    var cep = form.querySelector(".cep").value;

    var endereco = new Endereco()
    endereco.rua = rua;
    endereco.numero = numero;
    endereco.cidade = cidade;
    endereco.estado = estado;
    endereco.pais = pais;
    endereco.cep = cep;

    return endereco;
}







