import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlGroupInTemplateDrComponent } from './form-control-group-in-template-dr.component';

describe('FormControlGroupInTemplateDrComponent', () => {
  let component: FormControlGroupInTemplateDrComponent;
  let fixture: ComponentFixture<FormControlGroupInTemplateDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlGroupInTemplateDrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormControlGroupInTemplateDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
