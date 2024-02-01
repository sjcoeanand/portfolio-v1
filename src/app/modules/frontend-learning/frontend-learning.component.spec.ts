import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendLearningComponent } from './frontend-learning.component';

describe('FrontendLearningComponent', () => {
  let component: FrontendLearningComponent;
  let fixture: ComponentFixture<FrontendLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendLearningComponent]
    });
    fixture = TestBed.createComponent(FrontendLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
