import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N69CreatingUsingObservableComponent } from './n69-creating-using-observable.component';

describe('N69CreatingUsingObservableComponent', () => {
  let component: N69CreatingUsingObservableComponent;
  let fixture: ComponentFixture<N69CreatingUsingObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N69CreatingUsingObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N69CreatingUsingObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
