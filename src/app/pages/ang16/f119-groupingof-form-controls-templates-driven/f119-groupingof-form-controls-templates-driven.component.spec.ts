import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F119GroupingofFormControlsTemplatesDrivenComponent } from './f119-groupingof-form-controls-templates-driven.component';

describe('F119GroupingofFormControlsTemplatesDrivenComponent', () => {
  let component: F119GroupingofFormControlsTemplatesDrivenComponent;
  let fixture: ComponentFixture<F119GroupingofFormControlsTemplatesDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F119GroupingofFormControlsTemplatesDrivenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F119GroupingofFormControlsTemplatesDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
