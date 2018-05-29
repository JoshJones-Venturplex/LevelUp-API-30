import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service.service';
import { Pokemon } from '../../common/models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemon: any[];

  selectedPokemon: Pokemon = {
    name: "TEST",
    id: 1,
    description: "TEST"
  };

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokemonService.getNationalPokedex()
    .subscribe(res => {
      this.pokemon = res.pokemon_entries
    })
  }

  onSelect(id) {
    this.pokemonService.getPokemonById(id)
    .subscribe(res => {
      this.selectedPokemon.name = res.names[2].name;
      this.selectedPokemon.id = res.id;
      this.selectedPokemon.description = res.flavor_text_entries[1].flavor_text;
    })
  }

}
