let numeroInput = document.getElementById('txtnum')
let tabela = document.getElementById('tabelaNumeros')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, array) {
    if (array.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(numeroInput.value) && !inLista(numeroInput.value, valores)) {
        valores.push(Number(numeroInput.value))
        let itemTabela = document.createElement('option')
        itemTabela.text = `Valor ${numeroInput.value} adicionado.`
        tabela.appendChild(itemTabela)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }

    numeroInput.value = ''
    numeroInput.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maiorNumero = Math.max.apply(null, valores)
        let menorNumero = Math.min.apply(null, valores)
        let soma = valores.reduce((accumulator, value) => accumulator + value)
        let media = soma / valores.length
        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo foram cadastrados ${total} números</p>`
        resultado.innerHTML += `<p> O maior valor cadastrado foi ${maiorNumero}</p>`
        resultado.innerHTML += `<p> O menor valor cadastrado foi ${menorNumero}</p>`
        resultado.innerHTML += `<p> A soma de todos os números cadastrados é igual a: ${soma}</p>`
        resultado.innerHTML += `<p> A média de todos os números cadastrados é igual a: ${media}</p> `
    }
}