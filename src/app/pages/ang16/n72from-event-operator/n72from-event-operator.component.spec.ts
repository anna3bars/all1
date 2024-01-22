import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N72fromEventOperatorComponent } from './n72from-event-operator.component';

describe('N72fromEventOperatorComponent', () => {
  let component: N72fromEventOperatorComponent;
  let fixture: ComponentFixture<N72fromEventOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N72fromEventOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N72fromEventOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
