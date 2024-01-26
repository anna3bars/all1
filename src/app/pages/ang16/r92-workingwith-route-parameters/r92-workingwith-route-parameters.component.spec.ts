import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R92WorkingwithRouteParametersComponent } from './r92-workingwith-route-parameters.component';

describe('R92WorkingwithRouteParametersComponent', () => {
  let component: R92WorkingwithRouteParametersComponent;
  let fixture: ComponentFixture<R92WorkingwithRouteParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R92WorkingwithRouteParametersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R92WorkingwithRouteParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
