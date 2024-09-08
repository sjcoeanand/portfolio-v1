import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableVsSubjectComponent } from './observable-vs-subject.component';

describe('ObservableVsSubjectComponent', () => {
  let component: ObservableVsSubjectComponent;
  let fixture: ComponentFixture<ObservableVsSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableVsSubjectComponent]
    });
    fixture = TestBed.createComponent(ObservableVsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
