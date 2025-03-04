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

function AtualizaPessoa(id, nome, idade) {

    var teveRetorno = true;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == id) {
            pessoas[i].nome = nome;
            pessoas[i].idade = idade;
            return pessoas[i];
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "O código da pessoa é inválido!";
    }

}


module.exports = {
    CadastraPessoa,
    ConsultaPessoas,
    DeletePessoa,
    consultaID,
    AtualizaPessoa
}