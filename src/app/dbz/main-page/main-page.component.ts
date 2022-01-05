import { Component } from '@angular/core';

interface Character {
  name: string;
  powerLvl: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  listOfChars: Character[] = [
    { name: 'Goku', powerLvl: 99999 },
    { name: 'Vegeta', powerLvl: 8700 },
    { name: 'Gohan', powerLvl: 9099 },
  ]

  newChar: Character = {
    name: '',
    powerLvl: 0
  }

  send() {
    if (this.newChar.name.trim().length === 0) return
    this.listOfChars.push(this.newChar)
    this.newChar = {
      name: '',
      powerLvl: 0
    }
  }

}
