
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
    } else if (numeroDeIngressos == 0){
        alert('ingressos para pista esgotados')   
    } else{
        alert('Quantidade de ingressos indisponivel para pista')
    }
}

function RetirandoIgressos(tipo, quantidade){
    let numeroDeIngressos = document.getElementById(`qtd-${tipo}`).textContent

    if(numeroDeIngressos >= quantidade){
        document.getElementById(`qtd-${tipo}`).textContent = numeroDeIngressos - quantidade
    } else if (numeroDeIngressos == 0){
        alert('ingressos para pista esgotados')   
    } else{
        alert('Quantidade de ingressos indisponivel para pista')
    }   
}
