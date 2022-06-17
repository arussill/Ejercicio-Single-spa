import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ResponseAllPokemons } from '../interfaces/AllPokemons';
import { ResponsePokemonForm } from '../interfaces/PokemonForm';

@Injectable({
  providedIn: 'root',
})

/**
 * PokeService is a service that handles all the requests to the Poke API.
 * @author Daniel Granados
 * @version 0.0.1
 * @since 0.0.1
 */
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  /**
   * Get all pokemons from the Poke API.
   * @param limit number
   * @param offset number
   * @returns ResponseAllPokemons
   */
  getPokemons(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<ResponseAllPokemons>(this.apiUrl, { params });
  }

  /**
   * Get a pokemon from the Poke API.
   * @param id number
   * @returns ResponsePokemonForm
   */
  getPokemon(id: number) {
    return this.http.get<ResponsePokemonForm>(`${this.apiUrl}-form/${id}`);
  }
}
