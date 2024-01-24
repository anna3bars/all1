import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N67componentInteractionComponent } from './n67component-interaction.component';

describe('N67componentInteractionComponent', () => {
  let component: N67componentInteractionComponent;
  let fixture: ComponentFixture<N67componentInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N67componentInteractionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N67componentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
