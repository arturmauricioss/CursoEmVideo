//---------------------------------------------------
// Ordem de precedência primeiro aritimeticos
// ()
// **
// * / %
// + -

// Depois relacionais
// > < >= <=

// Depois de comparação de igualdade
// == != === !==

// Depois lógicos
// !
// &&
// ||
// ??

// Operadores ternários
// condição ? valorSeVerdadeiro : valorSeFalso

// E por último o operador de atribuição
// = += -= *= /= %= **= &&= ||= ??=

//---------------------------------------------------


// 5+2 //soma
// 5-2 //subtração
// 5*2 //multiplicação
// 5/2 //divisão
// 5%2 //resto da divisão 
// 5**2 //potencia


//---------------------------------------------------

// // AUTO ATRIBUIÇÃO -  
// // n = n + 2 é simplificado como n += 2
// // n = n - 2 é simplificado como n -= 2
// // n = n * 2 é simplificado como n *= 2
// // n = n / 2 é simplificado como n /= 2
// // n = n % 2 é simplificado como n %= 2
// // n = n ** 2 é simplificado como n **= 2
// // n = n + 1 é simplificado como n++ ou ++n
// // n = n - 1 é simplificado como n-- ou --n

//---------------------------------------------------

// Relacionais sempre retorna valores booleanos (true ou false)

// 5 > 2 -> true
// 5 < 2 -> false
// 5 >= 2 -> true
// 5 <= 2 -> false
// 5 == 2 -> false
// 5 != 2 -> true

//---------------------------------------------------

// // Comparação de tipos
// 5 == '5' -> true
// 5 === '5' -> false
// 5 != '5' -> false
// 5 !== '5' -> true

//---------------------------------------------------

// // Operadores lógicos
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false
// !true -> false
// !false -> true

//---------------------------------------------------

// // Precedência dos operadores lógicos
// // !
// // &&
// // ||

//---------------------------------------------------

// // Exemplo de expressão com operadores lógicos
// !(5 > 2) && (5 < 10) || (5 == 5)
// // !true && true || true
// // false && true || true
// // false || true
// // true

//---------------------------------------------------


// ?? (Nullish Coalescing)

// Retorna o valor da direita somente se o da esquerda for null ou undefined.

// let nome = null;
// console.log(nome ?? "Visitante"); // "Visitante"

//---------------------------------------------------

// ?. (Optional Chaining)

// Evita erro ao acessar algo que pode ser null ou undefined.

// let usuario = null;
// console.log(usuario?.nome); // undefined (não dá erro)

//---------------------------------------------------

// Operadores de atribuição lógica

// ✅ &&= (AND assignment)
// ✅ ||= (OR assignment)
// ✅ ??= (Nullish assignment)

// Eles combinam lógica com atribuição:

// let a = true;
// a &&= false;  // a vira false

//---------------------------------------------------

// // Operadores de comparação e lógicos são usados para tomar decisões em estruturas de controle, como if, while, for, etc. Eles também são usados para criar expressões mais complexas e para validar dados.

// // Exemplo de uso em uma estrutura de controle
// let idade = 18;
// if (idade >= 18) {
//     console.log("Você é maior de idade.");
// } else {
//     console.log("Você é menor de idade.");
// }  

//---------------------------------------------------