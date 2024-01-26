import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F114readingFormControlValuesComponent } from './f114reading-form-control-values.component';

describe('F114readingFormControlValuesComponent', () => {
  let component: F114readingFormControlValuesComponent;
  let fixture: ComponentFixture<F114readingFormControlValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F114readingFormControlValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F114readingFormControlValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
