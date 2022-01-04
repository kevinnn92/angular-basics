import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
  number: number = 0
  base: number = 5

  accumulate(value: number): void {
    this.number += value
  }
}
