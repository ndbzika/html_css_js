function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    //var hora = 15
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manhã.png'
        document.body.style.background = '#fbb983'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#d45a04'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#503f63'
    }
}    
    