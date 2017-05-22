import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceResultCardComponent } from './race-result-card.component';

describe('RaceResultCardComponent', () => {
  let component: RaceResultCardComponent;
  let fixture: ComponentFixture<RaceResultCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceResultCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
