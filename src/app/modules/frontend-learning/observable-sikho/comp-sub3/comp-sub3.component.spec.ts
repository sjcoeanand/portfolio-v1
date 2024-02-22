import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSub3Component } from './comp-sub3.component';

describe('CompSub3Component', () => {
  let component: CompSub3Component;
  let fixture: ComponentFixture<CompSub3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompSub3Component]
    });
    fixture = TestBed.createComponent(CompSub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
