import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R102CanActivateChildRouteGuardComponent } from './r102-can-activate-child-route-guard.component';

describe('R102CanActivateChildRouteGuardComponent', () => {
  let component: R102CanActivateChildRouteGuardComponent;
  let fixture: ComponentFixture<R102CanActivateChildRouteGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R102CanActivateChildRouteGuardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R102CanActivateChildRouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
