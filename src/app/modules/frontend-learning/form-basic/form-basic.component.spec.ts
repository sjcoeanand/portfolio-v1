import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicComponent } from './form-basic.component';

describe('FormBasicComponent', () => {
  let component: FormBasicComponent;
  let fixture: ComponentFixture<FormBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBasicComponent]
    });
    fixture = TestBed.createComponent(FormBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
