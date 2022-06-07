import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = 'rohan';
  currency : number = 2000;
  car = {
    color : ['Red','Green','Gray','Black','White'],
    type : ['SUV','Mini'],
    name : 'TATA'
  }
// this is normal js date format date;  
  currentDate : Date = new Date();
}
