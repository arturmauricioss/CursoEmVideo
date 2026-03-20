let res = document.querySelector("div#res")
function contar(){
    let inicio = document.querySelector("#inicio")
    let ini = Number(inicio.value)
    let fim = document.querySelector("#fim")
    let fini = Number(fim.value)
    let passo = document.querySelector("#passo")
    let passi = Number(passo.value)

    if (inicio.value===""){
        inicio.value=0
    }
    if (fim.value===""){
        fim.value=0
    }
    if (passo.value === "") {
        passo.value = 1
    }

    res.innerHTML =""

    if(ini==fini){
        let span = document.createElement('span')
        span.innerHTML = `&nbsp ${ini}`
        res.appendChild(span)
    }
    else if (ini<fini){
    for (let index = ini; index <= fini; index += passi) {
        let span = document.createElement('span')
        span.innerHTML = `&nbsp ${index}`
        
        let sum = index+passi
        if(sum<=fini){
            span.innerHTML += " ->"
        }
        res.appendChild(span)
    }
    }
    else if (fini<ini){
    for (let index = ini; index >= fini; index -= passi) {
        let span = document.createElement('span')
        span.innerHTML = `&nbsp ${index}`
        
        let sum = index-passi
        if(sum>=fini){
            span.innerHTML += " ->"
        }
        res.appendChild(span)
    }
    }
}