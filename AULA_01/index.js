const pessoa = require("./pessoa");

pessoa.CadastraPessoa("Davi", 20);
pessoa.CadastraPessoa("Adriel", 18);
pessoa.CadastraPessoa("Guilherme", 27);

console.log(pessoa.ConsultaPessoas());