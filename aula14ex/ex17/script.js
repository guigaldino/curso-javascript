function gerarTabuada() {
    let numero = document.getElementById('txtnum')
    let tabuada = document.getElementById('seltab')

    if (numero.value.length === 0) {
        numero.style.borderColor = 'red'
        alert('Por favor, digite um número e tente novamente')
        tabuada.style.display = 'none'
    } else {
        numero.style.borderColor = 'black'
        let n = Number(numero.value)
        tabuada.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            tabuada.style.display = 'block'
            let item = document.createElement('option')
            item.text = `${i} X ${n} = ${i * n}`
            item.value = `${i}`
            tabuada.appendChild(item)
        }

    }


}