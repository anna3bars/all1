import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ff114readingformcontrolvaluesComponent } from './ff114readingformcontrolvalues.component';

describe('Ff114readingformcontrolvaluesComponent', () => {
  let component: Ff114readingformcontrolvaluesComponent;
  let fixture: ComponentFixture<Ff114readingformcontrolvaluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ff114readingformcontrolvaluesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ff114readingformcontrolvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
