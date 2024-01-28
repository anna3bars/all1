import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H138creatingRecordswithHTTPostRequestComponent } from './h138creating-recordswith-httpost-request.component';

describe('H138creatingRecordswithHTTPostRequestComponent', () => {
  let component: H138creatingRecordswithHTTPostRequestComponent;
  let fixture: ComponentFixture<H138creatingRecordswithHTTPostRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H138creatingRecordswithHTTPostRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H138creatingRecordswithHTTPostRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
