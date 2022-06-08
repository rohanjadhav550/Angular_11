import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  templateFlag = false;
  images = [
    'https://picsum.photos/id/1/300/300',
    'https://picsum.photos/id/2/300/300',
    'https://picsum.photos/id/3/300/300'
  ]

  dispTemplate(){
    this.templateFlag = !this.templateFlag;
  }
}
