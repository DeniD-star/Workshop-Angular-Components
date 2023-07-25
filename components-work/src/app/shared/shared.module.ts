import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent]//kogato iskame da se polzva dadeniq komponent v drug component i html fail, naprimer LoaderComponent, trqbva da go exportnem ot negoviq modul, toest sharedmodule
})
export class SharedModule { }
