"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(id, name, type, level, evolved, evolutions, battleStats = { wins: 0, losses: 0, draws: 0 }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.level = level;
        this.evolved = evolved;
        this.evolutions = evolutions;
        this.battleStats = battleStats;
    }
    levelUp() {
        this.level++;
    }
    evolve() {
        if (!this.evolved && this.evolutions.length > 0) {
            this.evolved = true;
            return true;
        }
        return false;
    }
    recordBattleResult(result) {
        if (result === 'win')
            this.battleStats.wins++;
        if (result === 'loss')
            this.battleStats.losses++;
        if (result === 'draw')
            this.battleStats.draws++;
    }
}
exports.Pokemon = Pokemon;
