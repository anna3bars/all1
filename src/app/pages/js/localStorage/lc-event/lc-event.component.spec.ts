import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcEventComponent } from './lc-event.component';

describe('LcEventComponent', () => {
  let component: LcEventComponent;
  let fixture: ComponentFixture<LcEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LcEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LcEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
