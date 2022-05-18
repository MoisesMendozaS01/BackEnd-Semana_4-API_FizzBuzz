const ExplorerController = require('./../../../../BackEnd-Semana_4-API_FizzBuzz/lib/controllers/ExplorerController')

describe('Unit Test for ExplorerController',()=>{
    test('Parte 1: Probando clase ExplorerController',()=>{
        const ExplorersByMission = ExplorerController.getExplorersByMission('node');
        expect(ExplorersByMission).not.toBeUndefined
        expect(ExplorersByMission[0].mission).toBe('node')
    })
    test('Parte 2: función getExplorersUsernamesByMission',()=>{
        const ExplorerUsernames = ExplorerController.getExplorersUsernamesByMission('node')
        expect(ExplorerUsernames).toContain('ajolonauta14')
    })
    test('Parte 3: Función getExplorersAmonutByMission',()=>{
        const Explorers_number = ExplorerController.getExplorersAmonutByMission('node');
        expect(Explorers_number).toBe(10)
    })
    
})