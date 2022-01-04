import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//Components
import { CounterComponent } from "./counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
