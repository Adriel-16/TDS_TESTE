function soma(a, b){
    return a + b
}

function multiplicar(a, b){
    return a*b
}

function divisao(a, b){
    return a/b
}

function subtracao(a, b){
    return a-b
}
function pessoa(){
    return{
        id: 1,
        nome: "Adriel",
        idade: 18
    }
}
module.exports = {
    soma,
    multiplicar,
    divisao,
    subtracao,
    pessoa
}