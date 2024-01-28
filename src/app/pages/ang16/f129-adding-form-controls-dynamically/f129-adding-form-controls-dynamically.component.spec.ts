import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F129AddingFormControlsDynamicallyComponent } from './f129-adding-form-controls-dynamically.component';

describe('F129AddingFormControlsDynamicallyComponent', () => {
  let component: F129AddingFormControlsDynamicallyComponent;
  let fixture: ComponentFixture<F129AddingFormControlsDynamicallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F129AddingFormControlsDynamicallyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F129AddingFormControlsDynamicallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
