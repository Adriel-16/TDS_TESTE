const pessoa = require("./pessoa");

pessoa.CadastraPessoa("Guilherme", 27);
pessoa.CadastraPessoa("Meurer", 18);
pessoa.CadastraPessoa("Davi", 20);
pessoa.CadastraPessoa("Adriel", 18);

console.log(pessoa.ConsultaPessoas());

pessoa.DeletePessoa(1);

console.log(pessoa.ConsultaPessoas());
console.log(pessoa.consultaID(4));