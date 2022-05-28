import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LinearSearchComponent } from './app.component';

@NgModule({
  declarations: [
    LinearSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LinearSearchComponent]
})
export class LinearSearchModule { }
