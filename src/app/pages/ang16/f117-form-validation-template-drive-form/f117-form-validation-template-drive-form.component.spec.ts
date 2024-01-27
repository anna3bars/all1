import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F117FormValidationTemplateDriveFormComponent } from './f117-form-validation-template-drive-form.component';

describe('F117FormValidationTemplateDriveFormComponent', () => {
  let component: F117FormValidationTemplateDriveFormComponent;
  let fixture: ComponentFixture<F117FormValidationTemplateDriveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F117FormValidationTemplateDriveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F117FormValidationTemplateDriveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
