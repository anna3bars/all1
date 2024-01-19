import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPatchValTempDrComponent } from './set-patch-val-temp-dr.component';

describe('SetPatchValTempDrComponent', () => {
  let component: SetPatchValTempDrComponent;
  let fixture: ComponentFixture<SetPatchValTempDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetPatchValTempDrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetPatchValTempDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
