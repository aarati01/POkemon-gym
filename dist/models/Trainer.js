"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = void 0;
class Trainer {
    constructor(id, name, pokemons = []) {
        this.id = id;
        this.name = name;
        this.pokemons = pokemons;
    }
    addPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
    getPokemon(id) {
        return this.pokemons.find(pokemon => pokemon.id === id);
    }
}
exports.Trainer = Trainer;
