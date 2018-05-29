import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemon: any[];

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokemonService.getNationalPokedex()
    .subscribe(res => {
      this.pokemon = res.pokemon_entries
    })
  }

}
