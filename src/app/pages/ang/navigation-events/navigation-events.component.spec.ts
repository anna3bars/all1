import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationEventsComponent } from './navigation-events.component';

describe('NavigationEventsComponent', () => {
  let component: NavigationEventsComponent;
  let fixture: ComponentFixture<NavigationEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
