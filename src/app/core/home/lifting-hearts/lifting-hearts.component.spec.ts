import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingHeartsComponent } from './lifting-hearts.component';

describe('LiftingHeartsComponent', () => {
  let component: LiftingHeartsComponent;
  let fixture: ComponentFixture<LiftingHeartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiftingHeartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftingHeartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
