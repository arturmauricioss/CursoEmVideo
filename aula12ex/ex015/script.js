function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var form_ano = document.querySelector("#txtano")
    var res = document.querySelector("#res")
    if (form_ano.value.length == 0 || Number(form_ano.value) > ano_atual){
        res.innerHTML = `Verifique os dados novamente`
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano_atual - Number(form_ano.value)
        
        function sex(){
            if (fsex[0].checked){
                return "masculino"
            }
            else if (fsex[1].checked){
                return "feminino"
            }
        }
        function faixa_etaria(idade){
            if (idade>=0 && idade <2){
                return "bebe"
            } else if (idade<12){
                return "a criança"
            } else if (idade<18){
                return "adolecente"
            } else if (idade<30){
                return "jovem"
            } else if (idade<60){
                return "adulto"
            } else {
                return "idoso"
            }

        }
        var sexo = sex()
        var faixa_idade = faixa_etaria(idade)
        res.innerHTML = `É um ${faixa_idade} com ${idade} anos de idade do sexo ${sexo}`

        var span = document.createElement('span')
        span.setAttribute('content','bluely')
        span.innerHTML = `<br/>Verificando como inserir dinamicamente um elemento HTML com js`
        res.appendChild(span)




    }
}