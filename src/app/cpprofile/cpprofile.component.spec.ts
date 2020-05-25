import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpprofileComponent } from './cpprofile.component';

describe('CpprofileComponent', () => {
  let component: CpprofileComponent;
  let fixture: ComponentFixture<CpprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
