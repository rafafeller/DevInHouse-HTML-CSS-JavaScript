

function enviar() {
    var numero = document.getElementById("numero").value
    var res = document.getElementById("res");

    if(numero <=1){
       res.innerHTML = "O número digitado não é primo" 
    }

    else if(numero%2 !=0 || numero ==2){
       res.innerHTML = "O número digitado é primo"
    }
    else {
          res.innerHTML = "O número digitado não é primo"
       }
   
 }