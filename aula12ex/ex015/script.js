function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || formAno.value > ano || formAno.value < 0) {
        alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = 'Preencha os dados acima para ver o resultado!'
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - formAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (formSex[0].checked) {
           
            genero = 'homem'
            
            if(idade >= 0 && idade < 5){
                //Bebê
                img.setAttribute('src', 'bebe_M.png' )
            } else if (idade >= 5 && idade <= 12){
                //Criança
                img.setAttribute('src', 'crianca_M.png')
            } else if (idade <= 18){
                //Adolescente
                img.setAttribute('src', 'adolescente_M.png')
            } else if (idade <= 65){
                //Adulto
                img.setAttribute('src', 'adulto_M.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso_M.png')
            }
        } else {

            genero = 'mulher'
           
            if(idade >= 0 && idade < 5){
                //Bebê
                img.setAttribute('src','bebe_F.png' )
            } else if (idade >= 5 && idade <= 12){
                //Criança
                img.setAttribute('src', 'crianca_F.png')
            } else if (idade <= 18){
                //Adolescente
                img.setAttribute('src', 'adolescente_F.png' )
            } else if (idade <= 65){
                //Adulto
                img.setAttribute('src', 'adulto_F.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso_F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
