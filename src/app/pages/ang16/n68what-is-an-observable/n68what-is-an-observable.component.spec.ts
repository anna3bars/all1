import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N68whatIsAnObservableComponent } from './n68what-is-an-observable.component';

describe('N68whatIsAnObservableComponent', () => {
  let component: N68whatIsAnObservableComponent;
  let fixture: ComponentFixture<N68whatIsAnObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N68whatIsAnObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N68whatIsAnObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
