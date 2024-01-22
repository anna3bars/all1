import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N71RxJSoffromOperatorComponent } from './n71-rx-jsoffrom-operator.component';

describe('N71RxJSoffromOperatorComponent', () => {
  let component: N71RxJSoffromOperatorComponent;
  let fixture: ComponentFixture<N71RxJSoffromOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N71RxJSoffromOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N71RxJSoffromOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
