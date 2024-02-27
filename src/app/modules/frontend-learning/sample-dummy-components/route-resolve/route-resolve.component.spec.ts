import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteResolveComponent } from './route-resolve.component';

describe('RouteResolveComponent', () => {
  let component: RouteResolveComponent;
  let fixture: ComponentFixture<RouteResolveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteResolveComponent]
    });
    fixture = TestBed.createComponent(RouteResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
