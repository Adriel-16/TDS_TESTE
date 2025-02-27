const produto = [];
var idSeq = 1;

function CadastraProduto(nome, preco){
    var produtos = { id: idSeq++, nome: nome, preco: preco};
    produto.push(produtos);
    return produtos;
}

function ConsultaProduto(){
    return produto;
}

function DeleteProduto(id){

    var Retorno = true;

    for(let i = 0; i < produto.length; i++){
        if(produto[i].id == id){
            console.log(produto[1]);
            produto.splice(i ,1);
            return true;
        }else{
           Retorno = false;
        }

        if (!Retorno) {
            return "Código da pessoa é inválido!";
        }
    }
}

function consultaID(id) {
    return produto.filter(item => item.id == id);
}

function AtualizaProduto(id, nome, preco) {

    var teveRetorno = true;
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].id == id) {
            produto[i].nome = nome;
            produto[i].preco = preco;
            return cliente[i];
        } else {
            teveRetorno = false;
        }
    }

    if (!teveRetorno) {
        return "O código da pessoa é inválido!";
    }

}

module.exports ={
    CadastraProduto,
    ConsultaProduto,
    DeleteProduto,
    consultaID,
    AtualizaProduto

}