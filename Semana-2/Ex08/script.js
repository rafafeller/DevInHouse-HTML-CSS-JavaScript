

var textos = ['animal','carro','humano','prédio','cadeira','objeto'];
textos.sort(function(a,b)  {

    if(a.length > b.length){
        return -1;
    }
    if(b.length < a.length){
        return 1;
    }
    return 0;
})

var body = document.querySelector('body');

function orderSections() {

    for(i = 0 ; i < textos.length ; i++){

        var section = document.createElement('section')
        section.innerText = textos[i]
        body.appendChild(section)    
    }   
}
orderSections()
