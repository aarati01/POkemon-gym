"use strict";
// src/utils/types.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonType = exports.BattleResultType = void 0;
// Enum for Battle Result Types
var BattleResultType;
(function (BattleResultType) {
    BattleResultType["WIN"] = "win";
    BattleResultType["LOSS"] = "loss";
    BattleResultType["DRAW"] = "draw";
})(BattleResultType || (exports.BattleResultType = BattleResultType = {}));
// Enum for Pokémon Types
var PokemonType;
(function (PokemonType) {
    PokemonType["GRASS"] = "Grass";
    PokemonType["POISON"] = "Poison";
    PokemonType["FIRE"] = "Fire";
    PokemonType["WATER"] = "Water";
    PokemonType["ELECTRIC"] = "Electric";
    PokemonType["ROCK"] = "Rock";
    // Add more as needed
})(PokemonType || (exports.PokemonType = PokemonType = {}));
