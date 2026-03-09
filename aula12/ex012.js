var agora = new Date()

var hora = agora.getHours()
if (hora<3 || hora>=19){
    console.log('Boa Noite')
} else if (hora<12){
    console.log('Bom dia')
}else{
    console.log('Boa tarde')
}