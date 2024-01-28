import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H136IntroductiontoHTTPRequestResponseComponent } from './h136-introductionto-httprequest-response.component';

describe('H136IntroductiontoHTTPRequestResponseComponent', () => {
  let component: H136IntroductiontoHTTPRequestResponseComponent;
  let fixture: ComponentFixture<H136IntroductiontoHTTPRequestResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H136IntroductiontoHTTPRequestResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H136IntroductiontoHTTPRequestResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
