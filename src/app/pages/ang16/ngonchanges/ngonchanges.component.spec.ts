import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgonchangesComponent } from './ngonchanges.component';

describe('NgonchangesComponent', () => {
  let component: NgonchangesComponent;
  let fixture: ComponentFixture<NgonchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgonchangesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgonchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
