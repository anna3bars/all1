import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R90relativeAbsoluteRoutePathComponent } from './r90relative-absolute-route-path.component';

describe('R90relativeAbsoluteRoutePathComponent', () => {
  let component: R90relativeAbsoluteRoutePathComponent;
  let fixture: ComponentFixture<R90relativeAbsoluteRoutePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R90relativeAbsoluteRoutePathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R90relativeAbsoluteRoutePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
