import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F128CreatingandusingFormArrayComponent } from './f128-creatingandusing-form-array.component';

describe('F128CreatingandusingFormArrayComponent', () => {
  let component: F128CreatingandusingFormArrayComponent;
  let fixture: ComponentFixture<F128CreatingandusingFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F128CreatingandusingFormArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F128CreatingandusingFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
