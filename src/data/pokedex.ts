// data/pokedex.ts
interface BattleStats {
  wins: number;
  losses: number;
  draws: number;
}

export interface PokedexInterface {
  id: number;
  name: string;
  type: string[];
  level: number;
  evolved: boolean;
  evolutions: string[];
  battleStats: BattleStats;
}

const pokedex: PokedexInterface[] = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    level: 5,
    evolved: false,
    evolutions: ["Ivysaur", "Venusaur"],
    battleStats: { wins: 0, losses: 0, draws: 0 },
  },
  {
    id: 2,
    name: "Charmander",
    type: ["Fire"],
    level: 5,
    evolved: false,
    evolutions: ["Charmeleon", "Charizard"],
    battleStats: { wins: 0, losses: 0, draws: 0 },
  },
];

export default pokedex;
