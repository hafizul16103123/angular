import { Component, OnInit } from '@angular/core';

import { HeroService } from './marvel-hero.service';

@Component({
  selector: 'app-marvel-hero',
  templateUrl: './marvel-hero.component.html',
  styleUrls: ['./marvel-hero.component.css'],
  providers: [HeroService]
})
export class MarvelHeroComponent implements OnInit {
  heros = [];
  disable = false;
  inputHero = null;
  adding = false;
  addHero() {
    this.heros.push(this.inputHero);
    this.inputHero = null;
    this.adding = false;
  };
  addMore() {
    this.adding = !this.adding;

  };
  constructor(private ajax: HeroService) {
    this.heros = this.ajax.heros;
  };

  ngOnInit() {

  }

}
