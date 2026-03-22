let res = document.getElementById("res")
let select = document.querySelector("#select")
let input = document.querySelector("input#number")
var lista = []


function adicionar(){
    res.innerHTML=""
    let n = Number(input.value)
    if (input.value.trim() === "" || isNaN(n)){
        console.log('nenhum item adicionado')
    } else {
        let validar = false
        for(let pos = 0; pos<lista.length;pos++){
            if (n != lista[pos]){
                console.log(`${n} não é igual a ${lista[pos]}`)
            } else {
                console.log(`${n} é igual a ${lista[pos]}`)
                validar = true
                break
            }
        }
        console.log(validar)
        if (validar===true){
            console.log(`Numero já adicionado a lista`)

        } else{
            lista.push(n)
            console.log(lista)
            
            select.innerHTML += `<option>${n}</option>`
        }

        input.value = ""
    }
}

function calcular(){
    
    res.innerHTML=`<p>Ao todo temos ${lista.length} números na lista</p>`
    let resultado = 0
    for (var i = 0; i<lista.length; i++){
        
        valor = lista[i]
        resultado += valor
    }
   
    res.innerHTML+=`<p>A soma é ${resultado}</p>`

    if (lista.length<1){
        console.log('nenhum item adicionado')
        res.innerHTML+=`<p>A média de nada é nada</p>`
    } else {
        let media = resultado/lista.length

        media = media.toFixed(2)
        res.innerHTML+=`<p>A média é ${media}</p>`
    }
}