import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInitializationComponent } from './component-initialization.component';

describe('ComponentInitializationComponent', () => {
  let component: ComponentInitializationComponent;
  let fixture: ComponentFixture<ComponentInitializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentInitializationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
