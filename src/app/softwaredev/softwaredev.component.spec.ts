import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaredevComponent } from './softwaredev.component';

describe('SoftwaredevComponent', () => {
  let component: SoftwaredevComponent;
  let fixture: ComponentFixture<SoftwaredevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwaredevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwaredevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
