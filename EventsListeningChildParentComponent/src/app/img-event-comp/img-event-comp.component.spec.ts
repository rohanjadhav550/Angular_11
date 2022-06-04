import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEventCompComponent } from './img-event-comp.component';

describe('ImgEventCompComponent', () => {
  let component: ImgEventCompComponent;
  let fixture: ComponentFixture<ImgEventCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgEventCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgEventCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
