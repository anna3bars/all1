import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F121RessetingTemplateDrivenFormComponent } from './f121-resseting-template-driven-form.component';

describe('F121RessetingTemplateDrivenFormComponent', () => {
  let component: F121RessetingTemplateDrivenFormComponent;
  let fixture: ComponentFixture<F121RessetingTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F121RessetingTemplateDrivenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F121RessetingTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
