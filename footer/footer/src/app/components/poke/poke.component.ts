import { Component, OnInit } from '@angular/core';

import { ResponseAllPokemons } from 'src/app/interfaces/AllPokemons';
import { ResponsePokemonForm } from 'src/app/interfaces/PokemonForm';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'sofka-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css'],
})
export class PokeComponent implements OnInit {
  pokemons: ResponseAllPokemons = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  pokeDetails: boolean = false;
  pokemonChosen!: ResponsePokemonForm;
  limit: number = 20;
  offset: number = 20;

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
  }

  /**
   * Toggle the poke details.
   */
  togglePokeDetails() {
    this.pokeDetails = !this.pokeDetails;
  }

  /**
   * Get the details of a pokemon by its id.
   * @param id number
   */
  getPokemonDetails(id: number) {
    this.pokeService.getPokemon(id).subscribe((data) => {
      this.pokemonChosen = data;
    });
    this.togglePokeDetails();
  }

  /**
   * Show the next page of pokemons.
   */
  loadMorePokemons() {
    this.pokeService.getPokemons(this.limit, this.offset).subscribe((data) => {
      this.pokemons.results = [...this.pokemons.results, ...data.results];
    });
    this.offset += this.limit;
  }
}
