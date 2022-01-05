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
  newChar: Character = {
    name: 'Trunks',
    powerLvl: 14000
  }

  send() {
    console.log(this.newChar);
  }

}
