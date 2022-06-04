import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgUrl = 'https://picsum.photos/id/1/300/300';

  changeImg(e : KeyboardEvent)
  {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }
}
