import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInAngComponent } from './forms-in-ang.component';

describe('FormsInAngComponent', () => {
  let component: FormsInAngComponent;
  let fixture: ComponentFixture<FormsInAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsInAngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsInAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
