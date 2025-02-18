//CRUD
//CREATE - CRIAR
//READER - LER
//UPDATED - ATUALIZAR
//DELETE - DELETAR

const pessoas = [];
var idSeq = 1;

function CadastraPessoa(nome, idade){
    var pessoa = { id: idSeq++, nome: nome, idade: idade};
    pessoas.push(pessoa);
}

function ConsultaPessoas(){
    return pessoas;
}


function delete(){



}

//CadastraPessoa("Davi", 20);
//CadastraPessoa("Adriel", 18);
//CadastraPessoa("Guilherme", 27);

//console.log(ConsultaPessoas());

module.exports = {

    CadastraPessoa,
    ConsultaPessoas
    
}