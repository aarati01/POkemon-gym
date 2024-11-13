"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerService = void 0;
const trainerData = require("../data/trainers.json");
class TrainerService {
    constructor() {
        this.trainers = trainerData;
    }
    getTrainerByName(name) {
        return this.trainers.find(trainer => trainer.name === name);
    }
    addTrainer(trainer) {
        this.trainers.push(trainer);
    }
    addPokemonToTrainer(trainerName, pokemon) {
        const trainer = this.getTrainerByName(trainerName);
        if (trainer) {
            console.log(trainer);
            if (trainer == undefined)
                return false;
            trainer.addPokemon(pokemon);
            return true;
        }
        return false;
    }
}
exports.TrainerService = TrainerService;
