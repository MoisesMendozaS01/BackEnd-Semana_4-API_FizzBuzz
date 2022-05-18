const FizzbuzzService = require("./../../../../BackEnd-Semana_4-API_FizzBuzz/lib/services/FizzbuzzService");

describe("Unit Test for FizzbuzzzService",()=>{
    test("Parte 1: prueba de funcion FizzbuzzService",()=>{
        const explorer1 = {name: "Explorer1", score: 1};
        const ExplorerTrick = FizzbuzzService.applyValidationInExplorer(explorer1);

        const explorer3 = {name: "Explorer3", score: 3};
        const ExplorerTrick2 = FizzbuzzService.applyValidationInExplorer(explorer3);

        const explorer5 = {name: "Explorer5", score: 5};
        const ExplorerTrick3 = FizzbuzzService.applyValidationInExplorer(explorer5);

        const explorer15 = {name: "Explorer15", score: 15};
        const ExplorerTrick4 = FizzbuzzService.applyValidationInExplorer(explorer15);

        expect(ExplorerTrick.trick).toBe(1);
        expect(ExplorerTrick2.trick).toBe("FIZZ");
        expect(ExplorerTrick3.trick).toBe("BUZZ");
        expect(ExplorerTrick4.trick).toBe("FIZZBUZZ");
    });
});