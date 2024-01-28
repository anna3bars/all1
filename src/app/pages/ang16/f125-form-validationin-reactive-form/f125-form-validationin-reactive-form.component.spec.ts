import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F125FormValidationinReactiveFormComponent } from './f125-form-validationin-reactive-form.component';

describe('F125FormValidationinReactiveFormComponent', () => {
  let component: F125FormValidationinReactiveFormComponent;
  let fixture: ComponentFixture<F125FormValidationinReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F125FormValidationinReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F125FormValidationinReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
