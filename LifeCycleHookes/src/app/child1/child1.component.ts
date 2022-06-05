import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit
{
  @Input() imgEvent = '';  
  count : number = 0;
//to display click
  onImgClickFun()
  {
    this.count++; 
  }
// constructor from js
  constructor(){
    console.log('Constructor Hook');
  }
// OnInit hook
  ngOnInit(): void {
    console.log('OnInit function hook');
  }  
//on change hook
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange function hook ');
  }
//DoCheck hook
  ngDoCheck(): void {
    console.log('DoCheck funtion hook');
  }
//AfterContentInit function hook
  ngAfterContentInit(): void {
    console.log('this hook function after parent component initilized');
  }
//AfterComponentChecked hook
  ngAfterContentChecked(): void {
    console.log('this happens when parent component is checked')
  }
//AfterViewInit hook
  ngAfterViewInit(): void {
    console.log('this function executes after child component initilized');
  }  
//AfterViewChecked hook
  ngAfterViewChecked(): void {
    console.log('this acts after child component is checked')
  }

}
