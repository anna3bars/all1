import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang16Component } from './ang16.component';

describe('Ang16Component', () => {
  let component: Ang16Component;
  let fixture: ComponentFixture<Ang16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ang16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ang16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
