import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSikhoComponent } from './observable-sikho.component';

describe('ObservableSikhoComponent', () => {
  let component: ObservableSikhoComponent;
  let fixture: ComponentFixture<ObservableSikhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableSikhoComponent]
    });
    fixture = TestBed.createComponent(ObservableSikhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
