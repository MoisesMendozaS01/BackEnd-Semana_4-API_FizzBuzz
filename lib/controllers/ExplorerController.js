const ExplorerService = require("./../services/ExplorerService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMission(explorers,mission);
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);
    }
    static getExplorersAmonutByMission(mission){
        return this.getExplorersUsernamesByMission(mission).length;
    }
}

module.exports=ExplorerController;