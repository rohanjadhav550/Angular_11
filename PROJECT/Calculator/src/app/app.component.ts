import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result : any = '';
  len : number = 0;
  i : number = 0;
  temp : any;
  eachVar : any;
  first : number = 0;
  second : number = 0;
  sign : string = '';
  operationArr : [] = [];

  displayClicked(e : MouseEvent){
    this.result = this.result + (e.target as HTMLInputElement).value;
  }

  cleanAll(){
    this.result = '';
  }

  calculate(){
    for(this.eachVar in this.result)
    {
      if(this.result[this.eachVar].match(/[-X+/]/))
      {
        console.log(this.result[this.eachVar].match(/[-X+/]/));
        
      } 
      else
      {
        console.log(this.result[this.eachVar]);
      }
    }
  }

  removePrevious(){
    this.temp='';
    for(this.i=0;this.i<this.result.length-1;this.i++)
    {
      this.temp = this.temp + this.result[this.i];
    }

    this.result = this.temp;
  }
}
