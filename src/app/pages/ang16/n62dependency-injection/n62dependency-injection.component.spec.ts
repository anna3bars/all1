import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N62dependencyInjectionComponent } from './n62dependency-injection.component';

describe('N62dependencyInjectionComponent', () => {
  let component: N62dependencyInjectionComponent;
  let fixture: ComponentFixture<N62dependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N62dependencyInjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N62dependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
