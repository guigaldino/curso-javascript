let valores = []
let numeroImput = document.getElementById('txtnum')
let tababelaNum = document.getElementById('tabelaNumeros')
let resultado = document.getElementById('resultado')

function isNumero(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, array) {
    if (array.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(numeroImput.value) && !inLista(numeroImput.value, valores)) {
        valores.push(Number(numeroImput.value))
        let itemTabela = document.createElement('option')
        itemTabela.text = `Valor ${numeroImput.value} adicionado`
        itemTabela.value = `${numeroImput}`
        tababelaNum.appendChild(itemTabela)
        resultado.innerHTML = ''

    } else {
        alert('Número inválido ou já adicionado a lista. Por favor, tente novamente!')
    }

    numeroImput.value = ''
    numeroImput.focus()
}

function finalizar() {
    if(valores.length === 0){
        alert("Adicione números antes de finalizar")
    } else { 
            let total = valores.length
            let maiorNumero = Math.max.apply(null, valores)
            let menorNumero = Math.min.apply(null, valores)
            let soma = valores.reduce((accumulator, value) => accumulator + value)
            let media = soma / total
            resultado.innerHTML += `<p> O total de números cadastrados foi ${total} </p>`
            resultado.innerHTML += `<p> O maior número cadastrado foi ${maiorNumero} </p>`
            resultado.innerHTML += `<p> O menor número cadastrado foi ${menorNumero} </p>`
            resultado.innerHTML += `<p> A soma dos números cadastrados foi ${soma} </p>`
            resultado.innerHTML += `<p> A média dos valores cadastrados é igual a: ${media} </p>`
    }
}