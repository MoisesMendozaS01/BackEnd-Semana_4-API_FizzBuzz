const ExplorerService = require('./../services/ExplorerService');
const FizzBuzzService = require('./../services/FizzbuzzService');
const Reader = require('./../utils/Reader');

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMission(explorers,mission);
    }
}

module.exports=ExplorerController;