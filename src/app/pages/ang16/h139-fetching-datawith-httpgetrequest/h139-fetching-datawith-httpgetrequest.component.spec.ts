import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H139FetchingDatawithHTTPGETRequestComponent } from './h139-fetching-datawith-httpgetrequest.component';

describe('H139FetchingDatawithHTTPGETRequestComponent', () => {
  let component: H139FetchingDatawithHTTPGETRequestComponent;
  let fixture: ComponentFixture<H139FetchingDatawithHTTPGETRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H139FetchingDatawithHTTPGETRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H139FetchingDatawithHTTPGETRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
