// services/PokedexService.ts
import { Pokemon } from '../models/Pokemon';
import pokedexData, { PokedexInterface } from '../data/pokedex'; // Import the pokedex data

export class PokedexService {
  private pokedex: PokedexInterface[] = pokedexData; // Use PokedexInterface, not Pokemon class

  getPokemonById(id: number): PokedexInterface | undefined { // Return PokedexInterface type
    return this.pokedex.find((pokemon) => pokemon.id === id);
  }

  addPokemon(pokemon: PokedexInterface): void { // Accept PokedexInterface, not Pokemon class
    this.pokedex.push(pokemon);
  }

  updatePokemon(pokemon: PokedexInterface): void { // Accept PokedexInterface, not Pokemon class
    const index = this.pokedex.findIndex((p) => p.id === pokemon.id);
    if (index !== -1) {
      this.pokedex[index] = pokemon;
    }
  }
}
