import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R103candeactivateRouteGuardComponent } from './r103candeactivate-route-guard.component';

describe('R103candeactivateRouteGuardComponent', () => {
  let component: R103candeactivateRouteGuardComponent;
  let fixture: ComponentFixture<R103candeactivateRouteGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R103candeactivateRouteGuardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R103candeactivateRouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
