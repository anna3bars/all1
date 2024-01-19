import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsWhatisComponent } from './ls-whatis.component';

describe('LsWhatisComponent', () => {
  let component: LsWhatisComponent;
  let fixture: ComponentFixture<LsWhatisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsWhatisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LsWhatisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
