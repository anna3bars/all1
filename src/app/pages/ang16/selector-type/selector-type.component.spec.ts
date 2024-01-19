import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTypeComponent } from './selector-type.component';

describe('SelectorTypeComponent', () => {
  let component: SelectorTypeComponent;
  let fixture: ComponentFixture<SelectorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
