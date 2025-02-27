const cliente = require("./cliente");
const produto = require("./produto");
const pedido = require("./pedido");

//Cadastro
test("CadastroCliente", () => {
    expect(cliente.CadastraCliente("Clevanderson", 123)).toEqual({id:1, nome:"Clevanderson", CPF:123});
});

test("CadastroProduto", () => {
    expect(produto.CadastraProduto("Leite", 4.69)).toEqual({id:1, nome:"Leite", preco:4.69});
});

//consulta

test("ConsultaCliente", ()=>{
    expect(cliente.ConsultaCliente()).toEqual([{id:1, nome:"Clevanderson", CPF:123}]);
});

test("ConsultaProduto", ()=>{
    expect(produto.ConsultaProduto()).toEqual([{id:1, nome:"Leite", preco:4.69}]);
});

//consulta ID

test("ID Cliente", ()=>{

});

//delete

test("DeletaCliente", ()=>{
    expect(cliente.DeleteCliente(1)).toEqual(true);
});

test("DeletaProduto", ()=>{
    expect(produto.DeleteProduto(1)).toEqual(true);
});