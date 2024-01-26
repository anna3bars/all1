import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R93RetrievingRouteParameterValueComponent } from './r93-retrieving-route-parameter-value.component';

describe('R93RetrievingRouteParameterValueComponent', () => {
  let component: R93RetrievingRouteParameterValueComponent;
  let fixture: ComponentFixture<R93RetrievingRouteParameterValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R93RetrievingRouteParameterValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R93RetrievingRouteParameterValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
