import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N70errorCompletionObservableComponent } from './n70error-completion-observable.component';

describe('N70errorCompletionObservableComponent', () => {
  let component: N70errorCompletionObservableComponent;
  let fixture: ComponentFixture<N70errorCompletionObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N70errorCompletionObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N70errorCompletionObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
