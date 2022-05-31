import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickNum : number = 0;
  doubleClickNum: number = 0;
  keyDownVar : string = '';
  keyUpVar : string = '';
  blurVal : number = 0;
  focusVal : number = 0;
  scrollVal : number = 0;
  mouseUpVal : number = 0;
  mouseDownVal : number = 0;
  mouseEnterVal : number = 0;
  mouseLeaveVal : number = 0;

  clickEventFun(e : MouseEvent){
    this.clickNum++;
  }

  doubleClick(e : MouseEvent){
    this.doubleClickNum++;
  }

  keyDownFunction(e : KeyboardEvent){
    this.keyDownVar = (e.target as HTMLInputElement).value;
  }

  keyUpFunction(e : KeyboardEvent){
    this.keyUpVar = (e.target as HTMLInputElement).value;
  }

  blurEventFun(){
    this.blurVal++;
  }

  focusEventFun(){
    this.focusVal++;
  }

  scrollEventFun(){
    this.scrollVal++;
  }

  mouseUpFun(){
    this.mouseUpVal++;
  }

  mouseDownFun(){
    this.mouseDownVal++;
  }

  mouseEnterEvent(){
    this.mouseEnterVal++;
  }

  mouseLeaveEvent(){
    this.mouseLeaveVal++;
  }
}
