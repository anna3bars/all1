import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A18twoWayDataBindingComponent } from './a18two-way-data-binding.component';

describe('A18twoWayDataBindingComponent', () => {
  let component: A18twoWayDataBindingComponent;
  let fixture: ComponentFixture<A18twoWayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A18twoWayDataBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(A18twoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
