
import { Component } from "@angular/core";

@Component({
  selector : 'app-root',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css']
})

export class BinarySearchComp{
  private array : Array<number> = [1,5,9,2,6,1,10,14,12,22];
  public key : number = 10;
  private state : boolean = false;
  
  sortArr()
  {
    return this.array.sort();
  }

  dispArr(){
    return this.array;
  }
  
  binarySearch(){
    let low = 0;
    let heigh = this.array.length-1;
    let mid = Math.floor((this.array.length-1)/2);
    while(mid!=low)
    {
      if(this.array[mid]===this.key)
      {
        this.state = true;
        break;
      }
      else
      {
        if(this.key<this.array[mid])
        {
          heigh = mid;
          mid = heigh/2;
        }
        else
        {
          low = mid;
          mid = heigh/2;
        }
      }
    }
    return this.state;
  }
}