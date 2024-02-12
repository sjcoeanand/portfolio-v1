import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryScanComponent } from './retry-scan.component';

describe('RetryScanComponent', () => {
  let component: RetryScanComponent;
  let fixture: ComponentFixture<RetryScanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetryScanComponent]
    });
    fixture = TestBed.createComponent(RetryScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
