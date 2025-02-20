const index = require("./index");


test("Soma de dois valores!", () => {
    expect(index.soma(1,1)).toBe(2);
});

test("Subtração de dois valores", () => {
    expect(index.subtracao(3,1)).toBe(2);
});

test("Multiplicação de dois valores!", () => {
    expect(index.multiplicar(1,2)).toBe(2);
});

test("Divisão de dois valores!", () => {
    expect(index.divisao(4,2)).toBe(2);
});

test("Retorno de pessoa", () =>{
    expect(index.pessoa()).toEqual({id:1, nome:"Adriel", idade:18});
});