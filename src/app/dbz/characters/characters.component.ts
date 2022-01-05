import { Component, Input } from '@angular/core';

// Interfaces
import { DbzCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  // this array is coming from the Parent Component (main-page.component.ts)
  @Input('charData') listOfChars: DbzCharacter[] = []
}
