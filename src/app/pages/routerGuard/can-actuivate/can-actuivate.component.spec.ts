import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActuivateComponent } from './can-actuivate.component';

describe('CanActuivateComponent', () => {
  let component: CanActuivateComponent;
  let fixture: ComponentFixture<CanActuivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanActuivateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanActuivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
