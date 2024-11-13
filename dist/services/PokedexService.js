"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokedexService = void 0;
const pokedexData = require("../data/pokedex.json");
class PokedexService {
    constructor() {
        this.pokedex = pokedexData;
    }
    getPokemonById(id) {
        return this.pokedex.find(pokemon => pokemon.id === id);
    }
    addPokemon(pokemon) {
        this.pokedex.push(pokemon);
    }
    updatePokemon(pokemon) {
        const index = this.pokedex.findIndex(p => p.id === pokemon.id);
        if (index !== -1) {
            this.pokedex[index] = pokemon;
        }
    }
}
exports.PokedexService = PokedexService;
