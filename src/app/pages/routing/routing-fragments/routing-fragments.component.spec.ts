import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingFragmentsComponent } from './routing-fragments.component';

describe('RoutingFragmentsComponent', () => {
  let component: RoutingFragmentsComponent;
  let fixture: ComponentFixture<RoutingFragmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingFragmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingFragmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
