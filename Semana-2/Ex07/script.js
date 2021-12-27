

var textos = ['animal','carro','humano','prédio','cadeira','objeto'];
textos.sort();

var body = document.querySelector('body');

function orderSections() {

    for(i = 0 ; i < textos.length ; i++){

        var section = document.createElement('section')
        section.innerText = textos[i]
        body.appendChild(section)    
    }   
}
orderSections()
