import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSub1Component } from './comp-sub1.component';

describe('CompSub1Component', () => {
  let component: CompSub1Component;
  let fixture: ComponentFixture<CompSub1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompSub1Component]
    });
    fixture = TestBed.createComponent(CompSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
