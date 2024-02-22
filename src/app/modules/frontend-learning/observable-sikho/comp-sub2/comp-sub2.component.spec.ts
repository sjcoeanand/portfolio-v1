import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSub2Component } from './comp-sub2.component';

describe('CompSub2Component', () => {
  let component: CompSub2Component;
  let fixture: ComponentFixture<CompSub2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompSub2Component]
    });
    fixture = TestBed.createComponent(CompSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
