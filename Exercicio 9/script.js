function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade < 12) {
                img.setAttribute('src','meninocriança.png')
            } else if (idade < 21) {
                img.setAttribute('src','homemjovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'homemmaduro.png')
            } else {
                img.setAttribute('src', 'homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade < 12) {
                img.setAttribute('src','meninacriança.png')
            } else if (idade < 21) {
                img.setAttribute('src','mulherjovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'mulhermadura.png')
            } else {
                img.setAttribute('src', 'mulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
