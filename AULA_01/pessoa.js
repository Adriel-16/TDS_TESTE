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

function DeletePessoa(id){

    var Retorno = true;

    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].id == id){
            console.log(pessoas[1]);
            pessoas.splice(i ,1);
            return "Deletado com sucesso!";
        }else{
           Retorno = false;
        }

        if (!Retorno) {
            return "Código da pessoa é inválido!";
        }
    }
}

function consultaID(id) {
    return pessoas.filter(item => item.id == id);
}

function atualizaPessoa(id, nome, idade) {

}

module.exports = {
    CadastraPessoa,
    ConsultaPessoas,
    DeletePessoa,
    consultaID
}