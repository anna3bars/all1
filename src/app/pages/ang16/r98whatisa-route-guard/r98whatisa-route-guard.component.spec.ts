import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R98whatisaRouteGuardComponent } from './r98whatisa-route-guard.component';

describe('R98whatisaRouteGuardComponent', () => {
  let component: R98whatisaRouteGuardComponent;
  let fixture: ComponentFixture<R98whatisaRouteGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R98whatisaRouteGuardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R98whatisaRouteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
