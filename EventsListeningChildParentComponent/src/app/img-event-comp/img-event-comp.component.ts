import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-img-event-comp',
  templateUrl: './img-event-comp.component.html',
  styleUrls: ['./img-event-comp.component.css']
})
export class ImgEventCompComponent {
  @Input() imgEventIn = '';
  @Output() imgEventListener = new EventEmitter<string>();
}
