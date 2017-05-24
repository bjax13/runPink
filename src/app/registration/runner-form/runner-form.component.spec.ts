import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerFormComponent } from './runner-form.component';

describe('RunnerFormComponent', () => {
  let component: RunnerFormComponent;
  let fixture: ComponentFixture<RunnerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
