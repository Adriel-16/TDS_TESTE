const cliente = require("./cliente");
const produto = require("./produto");

const pedido = [];
var idSeq = 1;

function CadastraPedido(quantidade, total){
    var pedido = { id: idSeq++, quantidade: quantidade, total: total};
    pedido.push(pedido);
}

function ConsultaPedido(){
    return pedido;
}

function DeletePedido(id){

    var Retorno = true;

    for(let i = 0; i < pedido.length; i++){
        if(pedido[i].id == id){
            console.log(pedido[1]);
            pedido.splice(i ,1);
            return "Deletado com sucesso!";
        }else{
           Retorno = false;
        }

        if (!Retorno) {
            return "Código da pessoa é inválido!";
        }
    }
}