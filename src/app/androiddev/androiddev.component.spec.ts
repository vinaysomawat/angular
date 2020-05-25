import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroiddevComponent } from './androiddev.component';

describe('AndroiddevComponent', () => {
  let component: AndroiddevComponent;
  let fixture: ComponentFixture<AndroiddevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroiddevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroiddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
