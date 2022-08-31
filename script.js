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
// let neg=[-1,3,-2,5,-8,9,10,-7,-3]
// let neg2=[-1,3,-2,5,-8,9,10,-7,-3,10]
// function trueFalse(lista){
//     let soma=0
//     for(let i=0;i<lista.length;i++){
//         soma+=lista[i]
//     }
//     if(soma>lista.length){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(trueFalse(neg))
// console.log(trueFalse(neg2))

// ------------exercico 6-------------
// let arr=[-1,3,-2,5,-8,9,10,-7,-3]

// function arrPlus5(lista){
//     let newArr=[]
//     for(let i=0;i<lista.length;i++){
//         newArr.push(lista[i]+5)
//     }
//     return newArr
// }

// console.log(arrPlus5(arr))

// ------------exercico 7-------------
// let arr=[-1,3,-2,5,-8,9,10,-7,-3]

// function maiorQueMedia(lista){
//     let arrMaiorQueMedia=[]
//     let somaNum=0
//     let media
//     for(let i=0;i<lista.length;i++){
//         somaNum+=lista[i]
//     }
//     media=somaNum/lista.length
//     for(let i=0;i<lista.length;i++){
//     if(lista[i]>media){
//         arrMaiorQueMedia.push(lista[i])
//     }
// }
//     return arrMaiorQueMedia
// }

// console.log(maiorQueMedia(arr))

// ----ARRAYS DE STRINGS E STRINGS----
// ------------exercico 1-------------
// let nome = "Rafael Almeida Freitas"

// function encontarA(str){
//     let newStr=str.toLowerCase()
//     let contador=0
//     for(let i=0;i<newStr.length;i++){
//         if(newStr[i]=="a")
//         contador++
//     }
//     return contador
// }

// console.log(encontarA(nome))

// ------------exercico 2-------------
// let nomes=["rafael","almeida","freitas"]

// function contarStr(lista){
//     let contador=0
//     let str=""
//     for(let i=0;i<lista.length;i++){
//         str+=lista[i]
//     }
//     for(let i=0;i<str.length;i++){
//         contador++
//     }
//     return contador
// }

// console.log(contarStr(nomes))

// // ------------exercico 3-------------!!!!!
let nome="Rafael Almeida Freitas"
function retornarPalavrasImpar(frase)
let result=[]
let posição=0
for(let i=0;i<frase.length;i++){
    if
}


// ------------exercico 4-------------
// let frase="o ornitorrinco obrou por toda olaria"
// let nome="ornitorrinco"
// function trocarOpor0(str){
//     newStr=""
//     for(let i=0;i<str.length;i++){
//         if(str[i]=="o"){
//             newStr+=0
//         }else if(str[i]==" "){
//             newStr+=" "
//         }else{
//             newStr+=str[i]
//         }
//     }
//     return newStr
// }

// console.log(trocarOpor0(frase))
// console.log(trocarOpor0(nome))

// ------------exercico 5-------------
// let nome="papagaio"

// function pP(str){
//     newStr=""
//     for(let i=0;i<str.length;i++){
//         if(str[i]=="p"){
//             newStr+="P"
//         }else{
//             newStr+=str[i]
//         }
//     }
//     return newStr
// }

// console.log(pP(nome))











