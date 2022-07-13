var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)
if(hora<= 12){
    console.log("Bom Dia!")
} else if(hora <= 18){
    console.log('Boa tarde!')
} else if(hora <=0){
    console.log('Boa noite')
} else if(hora<=4){
    console.log('Boa madrugada')
}