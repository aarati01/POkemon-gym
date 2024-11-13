"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TrainerService_1 = require("./services/TrainerService");
const PokedexService_1 = require("./services/PokedexService");
const Battle_1 = require("./models/Battle");
const trainerService = new TrainerService_1.TrainerService();
const pokedexService = new PokedexService_1.PokedexService();
const ash = trainerService.getTrainerByName("Ash");
const bulbasaur = pokedexService.getPokemonById(1);
const charmander = pokedexService.getPokemonById(2);
if (ash && bulbasaur && charmander) {
    trainerService.addPokemonToTrainer("Ash", bulbasaur);
    trainerService.addPokemonToTrainer("Ash", charmander);
    const battleResult = Battle_1.Battle.conductBattle(bulbasaur, charmander);
    console.log('Battle Result:', battleResult);
}
