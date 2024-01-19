import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadtercontentcheckedComponent } from './ngadtercontentchecked.component';

describe('NgadtercontentcheckedComponent', () => {
  let component: NgadtercontentcheckedComponent;
  let fixture: ComponentFixture<NgadtercontentcheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgadtercontentcheckedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgadtercontentcheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
