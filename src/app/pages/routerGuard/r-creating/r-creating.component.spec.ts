import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCreatingComponent } from './r-creating.component';

describe('RCreatingComponent', () => {
  let component: RCreatingComponent;
  let fixture: ComponentFixture<RCreatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RCreatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
