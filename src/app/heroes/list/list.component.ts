import { Component } from "@angular/core";

@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heroList = ['Ironman', 'Thor', 'Hulk', 'Spiderman', 'Black Widow']
  heroRemoved = ''

  removeHero() {
    const hero = this.heroList.shift()
    this.heroRemoved = hero || ''
  }

}
