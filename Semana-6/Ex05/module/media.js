

export const calculo = (nota1, nota2, nota3) => {
    let media = (nota1 + nota2 + nota3) / 3;
    let resultado = document.createElement("div");
    document.body.appendChild(resultado);
    resultado.textContent = media;
    return media;
};

