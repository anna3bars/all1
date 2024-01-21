import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N66angularInjectionTokenComponent } from './n66angular-injection-token.component';

describe('N66angularInjectionTokenComponent', () => {
  let component: N66angularInjectionTokenComponent;
  let fixture: ComponentFixture<N66angularInjectionTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N66angularInjectionTokenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N66angularInjectionTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
