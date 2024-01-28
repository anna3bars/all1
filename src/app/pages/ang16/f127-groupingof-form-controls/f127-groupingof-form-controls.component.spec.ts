import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F127GroupingofFormControlsComponent } from './f127-groupingof-form-controls.component';

describe('F127GroupingofFormControlsComponent', () => {
  let component: F127GroupingofFormControlsComponent;
  let fixture: ComponentFixture<F127GroupingofFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F127GroupingofFormControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F127GroupingofFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
