const ExplorerController = require('./../../../../BackEnd-Semana_4-API_FizzBuzz/lib/controllers/ExplorerController')

describe('Unit Test for ExplorerController',()=>{
    test('Parte 1: Probando clase ExplorerController',()=>{
        const ExplorersByMission = ExplorerController.getExplorersByMission('node');
        expect(ExplorersByMission).not.toBeUndefined
    })
})