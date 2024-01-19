import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFilteringComponent } from './data-filtering.component';

describe('DataFilteringComponent', () => {
  let component: DataFilteringComponent;
  let fixture: ComponentFixture<DataFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFilteringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
