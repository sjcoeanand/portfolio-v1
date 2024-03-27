import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationFormsComponent } from './authentication-forms.component';

describe('AuthenticationFormsComponent', () => {
  let component: AuthenticationFormsComponent;
  let fixture: ComponentFixture<AuthenticationFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationFormsComponent]
    });
    fixture = TestBed.createComponent(AuthenticationFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
