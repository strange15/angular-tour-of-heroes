import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent:
      ${ this.selectedHero === hero ? 'Unselected' : 'Selected' } hero id=${hero.id}`);
    this.selectedHero = this.selectedHero === hero ? undefined : hero;
  }
}
