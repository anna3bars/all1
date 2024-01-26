import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R91NavigatingbetweenRoutesProgrammaticallyComponent } from './r91-navigatingbetween-routes-programmatically.component';

describe('R91NavigatingbetweenRoutesProgrammaticallyComponent', () => {
  let component: R91NavigatingbetweenRoutesProgrammaticallyComponent;
  let fixture: ComponentFixture<R91NavigatingbetweenRoutesProgrammaticallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R91NavigatingbetweenRoutesProgrammaticallyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R91NavigatingbetweenRoutesProgrammaticallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
