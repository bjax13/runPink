import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnotherRunnerComponent } from './add-another-runner.component';

describe('AddAnotherRunnerComponent', () => {
  let component: AddAnotherRunnerComponent;
  let fixture: ComponentFixture<AddAnotherRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnotherRunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnotherRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
