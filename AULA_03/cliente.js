const cliente = [];
var idSeq = 1;

function CadastraCliente(nome, CPF){
    var clientes = {id: idSeq++, nome: nome, CPF: CPF};
    cliente.push(clientes);
    return clientes;
}

function ConsultaCliente(){
    return cliente;
}

function DeleteCliente(id){

    var Retorno = true;

    for(let i = 0; i < cliente.length; i++){
        if(cliente[i].id == id){
            console.log(cliente[1]);
            cliente.splice(i ,1);
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
    return cliente.filter(item => item.id == id);
}

function AtualizaCliente(id, nome, CPF) {

    var teveRetorno = true;
    for (let i = 0; i < cliente.length; i++) {
        if (cliente[i].id == id) {
            cliente[i].nome = nome;
            cliente[i].CPF = CPF;
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
    CadastraCliente,
    ConsultaCliente,
    DeleteCliente,
    consultaID,
    AtualizaCliente

}