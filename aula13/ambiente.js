// ================================
// ESTRUTURA DE REPETIÇÃO WHILE
// ================================
// c = 1

// while(c <= 10){
//     console.log(`Teste ${c}`)
//     c++
// }

// ================================
// ESTRUTURA DE REPETIÇÃO FOR
// ================================

for(var c=1;c<=10;c++){
    console.log(`Teste ${c}`)
}

// ================================
// OUTRA ESTRUTURA DE REPETIÇÃO WHILE
// ================================
// let hpmax = 180
// let hpatual = 1
// let regen = 7

// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// async function regenerar(){

//     while(hpatual < hpmax && hpatual > 0){

//         hpatual += regen

//         if(hpatual > hpmax){
//             hpatual = hpmax
//         }

//         console.log(hpatual)

//         await delay(1000)
//     }

// }

// regenerar()
// ================================
// ESTRUTURA DE REPETIÇÃO DO WHILE
// ================================
// hpmax = 180
// hpatual = 1
// regen = 7
// do{
//     if (hpatual>0){
//         hpatual = hpatual+regen
//             if(hpatual>hpmax){
//             hpatual = hpmax
//         }
//         console.log(hpatual)
//     } else {
//         console.log("Você está morto")
//     }

// } while (hpatual<hpmax && hpatual>0)