import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuancesComponent } from './nuances.component';

describe('NuancesComponent', () => {
  let component: NuancesComponent;
  let fixture: ComponentFixture<NuancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
