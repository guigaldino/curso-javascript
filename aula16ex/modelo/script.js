function adicionar() {
    let numero = document.getElementById('txtnum')
    let tabela = document.getElementById('seltab')
    let n = Number(numero.value)

    if (numero.value.length === 0) {
        numero.style.borderColor = 'red'
        alert('Por favor, digite um número.')
    } else if (n < 0 || n > 100) {
        numero.style.borderColor = 'red'
        alert('Por favor, digite um número válido (entre 0 e 100)')
    } else {
        numero.style.borderColor = 'normal'
        let arr = [n]
    }

}