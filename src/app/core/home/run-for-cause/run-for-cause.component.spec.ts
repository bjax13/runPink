import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunForCauseComponent } from './run-for-cause.component';

describe('RunForCauseComponent', () => {
  let component: RunForCauseComponent;
  let fixture: ComponentFixture<RunForCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunForCauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunForCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
