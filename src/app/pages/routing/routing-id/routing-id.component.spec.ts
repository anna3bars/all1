import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingIdComponent } from './routing-id.component';

describe('RoutingIdComponent', () => {
  let component: RoutingIdComponent;
  let fixture: ComponentFixture<RoutingIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
