import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N64hierarchicalInjectionPractiseComponent } from './n64hierarchical-injection-practise.component';

describe('N64hierarchicalInjectionPractiseComponent', () => {
  let component: N64hierarchicalInjectionPractiseComponent;
  let fixture: ComponentFixture<N64hierarchicalInjectionPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N64hierarchicalInjectionPractiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N64hierarchicalInjectionPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
