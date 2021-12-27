class Endereco {

    constructor(rua, numero, cidade, estado, pais, cep) {

        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.cep = cep;

    }
}

class Cliente {

    constructor(nome, cpf, endereco, telefone) {

        this.nome = nome;
        this.cpf = cpf;
        this.endereco = [];
        this.endereco.push(endereco)
        this.telefone = telefone;
    }
}

class Conta {

    constructor(numConta, cliente) {

        this.numConta = numConta;
        this.saldo = 500;
        this.cliente = cliente;
    } 
}

class Transacoes {

    constructor(conta, valorDaTransacao) {
        if (conta instanceof Conta) {
            this.conta = conta;
            this.valor = valorDaTransacao;
        }
    }

    transferencia() {
        this.conta.saldo -= this.valor;
    }

    deposito() {
        this.conta.saldo += this.valor;
    }
}
let novoEndereco = new Endereco("Rua Orleans", 229, "SC", "Florianópolis", "Brasil", "88058694")
let novoCliente = new Cliente("Rafael Feller", 81130902072, novoEndereco, 48999679448);
let contaRafael = new Conta("38008", novoCliente);
let novaTransacao = new Transacoes(contaRafael, 200);
novaTransacao.transferencia();
console.log(contaRafael);

