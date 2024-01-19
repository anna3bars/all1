import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormValidatComponent } from './template-driven-form-validat.component';

describe('TemplateDrivenFormValidatComponent', () => {
  let component: TemplateDrivenFormValidatComponent;
  let fixture: ComponentFixture<TemplateDrivenFormValidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormValidatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrivenFormValidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
