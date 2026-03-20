let res = document.querySelector("div#res")
let inicio = document.querySelector("#inicio")
let fim = document.querySelector("#fim")
let passo = document.querySelector("#passo")



function contar(){
    inicio.value = inicio.value || 0
    fim.value = fim.value || 0
    passo.value = passo.value || 1
    let ini = Number(inicio.value)
    let fini = Number(fim.value)
    let passi = Number(passo.value)

    res.innerHTML =""

    function spamer(index,resu){
        let span = document.createElement('span')
        span.innerHTML = `&nbsp ${index}`
        if (resu===true){
            span.innerHTML += "->"
        }
        res.appendChild(span)
    }

    if(ini===fini){
        spamer(ini)
    }

    else if (ini<fini){
    for (let index = ini; index <= fini; index += passi) {
        let resu = index+passi<=fini
        spamer(index,resu)
    }
    }
    else if (fini<ini){
        for (let index = ini; index >= fini; index -= passi) {
            let resu = index-passi>=fini
            spamer(index,resu)
        }
    }
}