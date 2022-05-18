const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission",(request, response)=>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission",(request, response)=>{
    const mission = request.params.mission;
    const explorersamountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission:request.params.mission , quantity:explorersamountInMission});
});
app.get("/v1/explorers/usernames/:mission",(request, response)=>{
    const mission = request.params.mission;
    const explorerUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission:request.params.mission , quantity:explorerUsernamesInMission});
});
app.get("/v1/fizzbuzz/:number",(request, response)=>{
    const number = request.params.number;
    const Trick = ExplorerController.getExplorerTrick(number);
    response.json({score:request.params.number , trick:Trick});
});