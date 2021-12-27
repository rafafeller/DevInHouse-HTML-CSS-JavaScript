

function carregarEndereco(key){
    var enderecoJson = window.localStorage.getItem(key);
    if (enderecoJson != null) {
        var endereco = JSON.parse(enderecoJson);
        var rua = endereco.rua;
        var numero = endereco.numero;
        var cidade = endereco.cidade;
        var estado = endereco.estado;
        var pais = endereco.pais;
        var cep = endereco.cep;

        criarRow(rua, numero, cidade, estado, pais, cep)  
    }
}

function carregar (){
    carregarEndereco("keyCliente");
    carregarEndereco("keyEmpresa");
    carregarEndereco("keyLoja");
}   
   
function criarRow(rua, numero, cidade, estado, pais, cep) {

    var tbody = document.getElementById("t_body");
    var novaLinha = document.createElement("tr");
    var td_rua = document.createElement("td");
    var td_numero = document.createElement("td");
    var td_cidade = document.createElement("td");
    var td_estado = document.createElement("td");
    var td_pais = document.createElement("td");
    var td_cep = document.createElement("td");

    novaLinha.appendChild(td_rua);
    td_rua.innerHTML = rua;
    novaLinha.appendChild(td_numero);
    td_numero.innerHTML = numero;
    novaLinha.appendChild(td_cidade);
    td_cidade.innerHTML = cidade;
    novaLinha.appendChild(td_estado);
    td_estado.innerHTML = estado;
    novaLinha.appendChild(td_pais);
    td_pais.innerHTML = pais;
    novaLinha.appendChild(td_cep);
    td_cep.innerHTML = cep;

    tbody.appendChild(novaLinha);
}