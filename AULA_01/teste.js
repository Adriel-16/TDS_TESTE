function SomaDeDoisValores(a, b){
    return a + b;
}
console.log("O resultado:", SomaDeDoisValores (10, 5));

function Multiplicar(a, b){
    return a * b;
}
console.log("O resultado:", Multiplicar (10, 5));

function Divisao(a, b){
    return a / b;
}

console.log("O resultado:", Divisao (10, 5));

//fazendo array list

const data = [];

data.push(1);
data.push(2);
data.push(3);
data.push(4);
data.push(5);
data.push(6);
data.push(7);
data.push(8);
data.push(9);
data.push(10);

console.log(data);

data.splice(5,1);

const pessoa = {

    id: 1,
    nome: "Adriel",
    idade: 18

}

module.exports = {
    SomaDeDoisValores,
    Multiplicar,
    Divisao,


}