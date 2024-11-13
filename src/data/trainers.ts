import { PokedexInterface } from "./pokedex";

interface Trainer {
  id: number;
  name: string;
  pokemons: PokedexInterface[]; // Array of PokedexInterface (pokemons) each trainer has
}

const trainers: Trainer[] = [
  {
    "id": 1,
    "name": "Ash",
    "pokemons": []
  },
  {
    "id": 2,
    "name": "Misty",
    "pokemons": []
  },
  {
    "id": 3,
    "name": "Brock",
    "pokemons": []
  }
];

export default trainers;
