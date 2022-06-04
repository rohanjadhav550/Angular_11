import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgUrlMain = './assets/Shiva.jpg';

  consoleFun(event : string){
    console.log(event);
  }
}
