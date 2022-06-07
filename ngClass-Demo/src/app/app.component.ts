import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  colorFlag = false;

  ngOnInit(){
    console.log(this.colorFlag);
  }

  changeFun(){
    this.colorFlag = !this.colorFlag;
  }

}
