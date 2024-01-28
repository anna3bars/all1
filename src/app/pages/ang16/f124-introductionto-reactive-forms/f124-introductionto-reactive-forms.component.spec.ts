import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F124IntroductiontoReactiveFormsComponent } from './f124-introductionto-reactive-forms.component';

describe('F124IntroductiontoReactiveFormsComponent', () => {
  let component: F124IntroductiontoReactiveFormsComponent;
  let fixture: ComponentFixture<F124IntroductiontoReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F124IntroductiontoReactiveFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F124IntroductiontoReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
