function adicionar() {
    let numero = document.getElementById('txtnum')
    let n = Number(numero.value)
    let tabela = document.getElementById('seltab')
    let res = document.getElementById('res')
    let valores = []

    if (numero.value.length === 0) {
        numero.style.borderColor = 'red'
        alert('Por favor, digite um número.')
    } else if (n < 1 || n > 100) {
        numero.style.borderColor = 'red'
        alert('Digite um número válido (entre 1 e 100)')
    } else {
        for(let i = 0; i < valores.length; i++){
            valores.push(n)
            if(valores.indexOf(n) != -1){
                let item = document.createElement('option')
                item.text = `Valor ${valores} adicionado.`
                tabela.appendChild(item)
            } else { 
                alert('Número já adicionado')
            }
        }
    } 
}