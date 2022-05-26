import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ArithMaticComp } from "./app.component";

@NgModule({
  imports:[
    BrowserModule
  ],
  declarations:[
    ArithMaticComp
  ],
  bootstrap: [
    ArithMaticComp
  ]
})

export class ArithMaticModule{

}
