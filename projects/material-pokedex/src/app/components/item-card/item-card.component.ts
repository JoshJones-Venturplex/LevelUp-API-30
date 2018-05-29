import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Pokemon } from '../../common/models/pokemon';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  constructor() { }
  @Input() poke: Pokemon;

  ngOnInit() {
  }

}
