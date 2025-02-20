const pessoa = require("./pessoa");

pessoa.CadastraPessoa("Guilherme", 27);
pessoa.CadastraPessoa("Meurer", 18);
pessoa.CadastraPessoa("Davi", 20);
pessoa.CadastraPessoa("Adriel", 18);

console.log("Consulta Pessoas");

console.log(pessoa.ConsultaPessoas());

console.log("Pessoa deletada");
console.log(pessoa.DeletePessoa(1));

console.log("Consulta de pessoas atualizada");
console.log(pessoa.ConsultaPessoas());

console.log("Consulta ID");
console.log(pessoa.consultaID(4));

console.log("Atualiza pessoa");
console.log(pessoa.AtualizaPessoa(2, "Guilherme", 27));
console.log("Pessoa atulizada com sucesso");
