import { Component } from '@angular/core';

// Interfaces
import { DbzCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  listOfChars: DbzCharacter[] = [
    { name: 'Goku', powerLvl: 99999 },
    { name: 'Vegeta', powerLvl: 8700 },
    { name: 'Gohan', powerLvl: 9099 },
  ]

  newChar: DbzCharacter = {
    name: 'Mister Roshi',
    powerLvl: 4000
  }

}
