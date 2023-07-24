function gerarTabuada() {
    let numero = document.getElementById('txtnum')
    let tabuada = document.getElementById('seltab')
    
    if(numero.value.length === 0){
        numero.style.borderColor = 'red'
        alert('Por favor digite um número')
    } else {
        numero.style.borderColor = 'black'
        alert('tudo certo')
    }

 }