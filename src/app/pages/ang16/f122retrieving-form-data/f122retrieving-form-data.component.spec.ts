import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F122retrievingFormDataComponent } from './f122retrieving-form-data.component';

describe('F122retrievingFormDataComponent', () => {
  let component: F122retrievingFormDataComponent;
  let fixture: ComponentFixture<F122retrievingFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F122retrievingFormDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F122retrievingFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
