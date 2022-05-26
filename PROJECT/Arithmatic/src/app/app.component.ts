import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// this component class will perfom some simple arithmatic operations and will be displayed on view part
export class ArithMaticComp{
  private num1 : number = 10;
  private num2 : number = 30;

  add():number{
    return this.num1+this.num2;
  }

  sub():number{
    return this.num2-this.num1;
  }

  mul():number{
    return this.num1*this.num2;
  }

  div():number{
    return this.num2/this.num1;
  }
}
