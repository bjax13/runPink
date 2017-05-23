import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyRunComponent } from './why-run.component';

describe('WhyRunComponent', () => {
  let component: WhyRunComponent;
  let fixture: ComponentFixture<WhyRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
