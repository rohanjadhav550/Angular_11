import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImgEventCompComponent } from './img-event-comp/img-event-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgEventCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
