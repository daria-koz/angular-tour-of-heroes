import { Component, OnInit, Output } from '@angular/core';
import { Hero } from './../models/hero'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroService } from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title: string;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }


  ngOnInit() {
    this.title = 'Tour of heroes';
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  delete(hero: Hero): void {
    var index = this.heroes.indexOf(hero, 0);
    if (index > -1) {
      this.heroes.splice(index, 1);
    }
    this.selectedHero = null;
  }
}
