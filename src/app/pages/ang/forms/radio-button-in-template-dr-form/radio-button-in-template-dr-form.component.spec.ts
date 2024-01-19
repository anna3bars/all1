import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonInTemplateDrFormComponent } from './radio-button-in-template-dr-form.component';

describe('RadioButtonInTemplateDrFormComponent', () => {
  let component: RadioButtonInTemplateDrFormComponent;
  let fixture: ComponentFixture<RadioButtonInTemplateDrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonInTemplateDrFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioButtonInTemplateDrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
