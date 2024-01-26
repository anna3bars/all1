import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F113introductionToTemplateDrivenFormComponent } from './f113introduction-to-template-driven-form.component';

describe('F113introductionToTemplateDrivenFormComponent', () => {
  let component: F113introductionToTemplateDrivenFormComponent;
  let fixture: ComponentFixture<F113introductionToTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F113introductionToTemplateDrivenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F113introductionToTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
