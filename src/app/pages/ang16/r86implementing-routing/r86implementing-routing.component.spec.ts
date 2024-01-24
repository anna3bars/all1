import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R86implementingRoutingComponent } from './r86implementing-routing.component';

describe('R86implementingRoutingComponent', () => {
  let component: R86implementingRoutingComponent;
  let fixture: ComponentFixture<R86implementingRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R86implementingRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R86implementingRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
