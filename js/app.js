
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value
    let quantidade = document.getElementById('qtd').value
    if (quantidade <= 0){
        alert('Campo "Qtde" tem que ser preenchido com valor maior que 0!')
        return
    }
    let numeroDeIngressos = document.getElementById(`qtd-${tipoIngresso}`).textContent

    if(numeroDeIngressos >= quantidade){
        document.getElementById(`qtd-${tipoIngresso}`).textContent = numeroDeIngressos - quantidade
    }else if (numeroDeIngressos == 0 && tipoIngresso == 'pista'){
        alert(`ingressos para ${tipoIngresso} esgotados`)   
    }else if(numeroDeIngressos == 0 && tipoIngresso != 'pista'){
        alert(`ingressos para cadeira ${tipoIngresso} esgotados`) 
    }else{
        alert(`Quantidade de ingressos indisponivel`)
    }
    
    document.getElementById('qtd').value = ""
}

