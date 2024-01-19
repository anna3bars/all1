import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RWhatIsComponent } from './r-what-is.component';

describe('RWhatIsComponent', () => {
  let component: RWhatIsComponent;
  let fixture: ComponentFixture<RWhatIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RWhatIsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RWhatIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
