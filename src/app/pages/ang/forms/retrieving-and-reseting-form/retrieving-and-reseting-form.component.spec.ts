import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievingAndResetingFormComponent } from './retrieving-and-reseting-form.component';

describe('RetrievingAndResetingFormComponent', () => {
  let component: RetrievingAndResetingFormComponent;
  let fixture: ComponentFixture<RetrievingAndResetingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrievingAndResetingFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetrievingAndResetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
