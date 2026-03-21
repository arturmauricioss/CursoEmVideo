let num =  [5,8,2,9,3]

// num[5] = 6
// num.push(7)

// num.sort()

// console.log(`${num}`)
// console.log(num.length)
 


/* for clássico */

// for(let pos=0; pos<num.length;pos++){
//     console.log(`Na posição ${pos} tem o número ${num[pos]}`)
// }

/* for moderno */

// for(let pos in num){
//     console.log(`Na posição ${pos} tem o número ${num[pos]}`)
// }

let procurando_no_array = num.indexOf(8)

if (procurando_no_array == -1){
    
    console.log(`O valor não foi encontrado`)

}else{
    
    console.log(`O valor está na posição ${procurando_no_array}`)
    
}

