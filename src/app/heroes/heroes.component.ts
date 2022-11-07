import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    const testString:string = 'test';
    console.log("🚀 ~ file: heroes.component.ts ~ line 26 ~ HeroesComponent ~ onSelect ~ hero", hero)
    this.selectedHero = hero;
  }
}
