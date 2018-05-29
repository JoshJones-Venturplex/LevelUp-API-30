import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  public getNationalPokedex() {
    return this.http.get<any>(`${this.baseUrl}pokedex/1/`);
  }

  public getSinnohPokedex() {
    return this.http.get<any>(`${this.baseUrl}pokedex/6`)
  }

  public getPokemonById(pokemon_id) {
    return this.http.get<any>(`${this.baseUrl}pokemon-species/${pokemon_id}`)
  }
}
