

const listaAtivo =
[
    { id: 1, cliente: 'João Celso de Souza', idade: 33, ativo: true },
    { id: 2, cliente: 'Claudia Cipriano', idade: 28, ativo: true },
    { id: 3, cliente: 'Edilene Souza Silva', idade: 41, ativo: true },
    { id: 4, cliente: 'Maurício Gomes', idade: 17, ativo: true },
    { id: 5, cliente: 'Claudia Cipriano', idade: 22, ativo: true }
  ]


  const ageOverTwentyFive = listaAtivo.filter((user => user.idade > 25));
        console.log(ageOverTwentyFive);
  