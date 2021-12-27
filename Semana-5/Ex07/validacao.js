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

    validaCpf(){
        if(this.cpf.length == 11){
            return ` CPF VÁLIDO`
        }else{
            this.cpf = ''
            return ` CPF INVÁLIDO`
            
        }
    }
}

let novoEndereco = new Endereco("Rua Orleans", 229, "Florianópolis", "SC", "Brasil", 88058694);
let novoCliente = new Cliente("Rafael Feller", "81130902072", novoEndereco, 48999679448);
console.log(novoCliente.validaCpf());
