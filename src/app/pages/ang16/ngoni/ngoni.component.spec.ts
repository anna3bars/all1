import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoniComponent } from './ngoni.component';

describe('NgoniComponent', () => {
  let component: NgoniComponent;
  let fixture: ComponentFixture<NgoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgoniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
