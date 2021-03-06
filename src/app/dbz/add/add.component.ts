import { Component, Input, Output, EventEmitter } from '@angular/core';

// Interfaces
import { DbzCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Input() newChar: DbzCharacter = {
    name: '',
    powerLvl: 0
  }

  @Output() onNewCharacter: EventEmitter<DbzCharacter> = new EventEmitter()

  send() {
    if (this.newChar.name.trim().length === 0) return
    console.log(this.newChar);
    // emit the event to the parent
    this.onNewCharacter.emit(this.newChar)

    // this.listOfChars.push(this.newChar)
    this.newChar = {
      name: '',
      powerLvl: 0
    }
  }

}
