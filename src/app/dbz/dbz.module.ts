import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]

})
export class DbzModule { }
