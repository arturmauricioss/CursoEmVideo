var tabuada_completa = document.getElementById("tabuada_completa")

function gerar_tabuada(){
    
    tabuada_completa.innerHTML=""

    var numero_no_input = Number(document.getElementById("inserir_numero").value)
    
    for (let index=1; index<=10 ;index++){

        let opt = document.createElement("option")
        resultado = index * numero_no_input
        opt.textContent = `${numero_no_input} * ${index} = ${resultado}`
        tabuada_completa.appendChild(opt)
    }
}