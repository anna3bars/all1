import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N65injectingServiceIntoAnotherServiceComponent } from './n65injecting-service-into-another-service.component';

describe('N65injectingServiceIntoAnotherServiceComponent', () => {
  let component: N65injectingServiceIntoAnotherServiceComponent;
  let fixture: ComponentFixture<N65injectingServiceIntoAnotherServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N65injectingServiceIntoAnotherServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N65injectingServiceIntoAnotherServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
