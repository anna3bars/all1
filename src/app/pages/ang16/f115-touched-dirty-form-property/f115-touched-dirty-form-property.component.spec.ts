import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F115TouchedDirtyFormPropertyComponent } from './f115-touched-dirty-form-property.component';

describe('F115TouchedDirtyFormPropertyComponent', () => {
  let component: F115TouchedDirtyFormPropertyComponent;
  let fixture: ComponentFixture<F115TouchedDirtyFormPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F115TouchedDirtyFormPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F115TouchedDirtyFormPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
