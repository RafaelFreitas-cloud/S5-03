// ---------ARRAYS NUMÉRICOS----------
// ------------exercico 1-------------
// let neg=[-1,3,-2,5,-8,9,10,-7,-3]

// function qtNegativos(lista){
//     let contador=0
//     for(let i=0;i<lista.length;i++){
//         if(lista[i]<0){
//             contador++
//         }
//     }
//     return contador
// }

// console.log(qtNegativos(neg))

// ------------exercico 2-------------
// let neg=[-1,3,-2,5,-8,9,10,-7,-3]

// function somaNegativos(lista){
//     let soma=0
//     for(let i=0;i<lista.length;i++){
//         if(lista[i]<0){
//             soma+=lista[i]
//         }
//     }
//     return soma
// }

// console.log(somaNegativos(neg))

// ------------exercico 3-------------
// function makeArray(n) {
//     let arr = []
//     if (n == 0) {
//         return "Entrada inválida."
//     } else if (n > 0) {
//         for (let i = 0; i <= n; i++) {
//             if (i % 2 == 0) {
//                 arr.push(i)
//             }
//         }
//     } else {
//         for (let i = n; i <= 0; i++) {
//             if (i % 2 == 0) {
//                 arr.push(i)
//             }
//         }
//     }
//     return arr
// }

// console.log(makeArray(10))
// console.log(makeArray(0))
// console.log(makeArray(-10))

// ------------exercico 4-------------
// let neg=[-1,3,-2,5,-8,9,10,-7,-3]

// function negArray(lista){
//     arr=[]
//     for(let i=0;i<lista.length;i++){
//         if(lista[i]<0){
//             arr.push(lista[i])
//         }
//     }
//     return arr
// }

// console.log(negArray(neg))

// ------------exercico 5-------------
let neg=[-1,3,-2,5,-8,9,10,-7,-3]
let neg2=[-1,3,-2,5,-8,9,10,-7,-3,10]
function trueFalse(lista){
    let soma=0
    for(let i=0;i<lista.length;i++){
        soma+=lista[i]
    }
    if(soma>lista.length){
        return true
    }else{
        return false
    }
}

console.log(trueFalse(neg))
console.log(trueFalse(neg2))