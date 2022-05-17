const Reader = require("./../../../../BackEnd-Semana_4-API_FizzBuzz/lib/utils/Reader");


describe("Unit Test for Reader class",()=>{
    test("Parte 1: Refactoring",()=>{
        const explorers = Reader.readJsonFile("./explorers.json");
        expect(explorers).not.toBeUndefined();
    });
});