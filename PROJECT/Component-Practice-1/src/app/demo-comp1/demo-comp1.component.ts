import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-comp1',
  templateUrl: './demo-comp1.component.html',
  styleUrls: ['./demo-comp1.component.css']
})
export class DemoComp1Component implements OnInit {

  private visible: boolean = false;
  private name: string = 'Rohan';
  private altName: string = '';
  private place: string = 'Bangaluru';
  private altPlace: string = '';
  private givenName: string = '';
  private givenPlace: string = '';

  constructor() { }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true;
    }, 4000);
  }
  
  loadComponent(){
    return this.visible;
  }

  nameDisplay(){
    return this.name;
  } 
  
  clearName(){
    this.altName = this.name;
    this.name = '';
  }

  placeOldName(){
    if(this.givenName==='')
      this.name = this.altName;
  }

  placeDisplay(){
    return this.place;
  }

  clearPlace(){
    this.altPlace = this.place;
    this.place = '';
  }

  placeOldPlace(){
    if(this.givenPlace==='')
      this.place = this.altPlace;
  }

  givenNameEnter(e: KeyboardEvent){
   this.givenName = (e.target as HTMLInputElement).value;    
  }

  givenPlaceEntry(e: KeyboardEvent)
  {
    this.givenPlace = (e.target as HTMLInputElement).value;
  }

  replaceAll(){
    if(this.givenName!='')
      this.name = this.givenName;
    if(this.givenPlace!='')
      this.place = this.givenPlace;
    alert('Name: '+this.name+"\nPlace: "+this.place);
  }
}
