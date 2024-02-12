import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeObsComponent } from './take-obs.component';

describe('TakeObsComponent', () => {
  let component: TakeObsComponent;
  let fixture: ComponentFixture<TakeObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeObsComponent]
    });
    fixture = TestBed.createComponent(TakeObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
