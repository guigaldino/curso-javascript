function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#d4b896'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#aa7259'
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor ='#003e63'
    }

}