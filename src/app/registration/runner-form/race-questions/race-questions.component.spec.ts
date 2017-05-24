import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceQuestionsComponent } from './race-questions.component';

describe('RaceQuestionsComponent', () => {
  let component: RaceQuestionsComponent;
  let fixture: ComponentFixture<RaceQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
