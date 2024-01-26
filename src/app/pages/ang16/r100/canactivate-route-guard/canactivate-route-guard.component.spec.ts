import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanactivateRouteGuardComponent } from './canactivate-route-guard.component';

describe('CanactivateRouteGuardComponent', () => {
  let component: CanactivateRouteGuardComponent;
  let fixture: ComponentFixture<CanactivateRouteGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanactivateRouteGuardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanactivateRouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
