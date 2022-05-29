import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class LinearSearchComponent {
  private array : Array<number> = [9,20,4,8,0,6,44,3,17,60];
  public key : number = 40;
  private state : boolean = false;

  dispArr(){
    return this.array;
  }

  dispKey(){
    return this.key;
  }

  lieanerSearch(){
    let i : number = 0;
    while(i<this.array.length)
    {
      if(this.array[i]===this.key)
      {
        this.state = true;
        break;
      }
      i++;
    }
    return this.state;
  }
}
