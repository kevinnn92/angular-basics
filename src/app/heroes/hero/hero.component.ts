import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})

export class HeroComponent {
  name: string = 'Ironman'
  age: number = 29

  get uppercaseName() {
    return this.name.toUpperCase()
  }

  getName(): string {
    return this.name + ' - ' + this.age
  }

  changeName() {
    this.name = 'Spider-Man'
  }

  changeAge() {
    this.age = 22
  }
}
