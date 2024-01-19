import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaftercontebtinitComponent } from './ngaftercontebtinit.component';

describe('NgaftercontebtinitComponent', () => {
  let component: NgaftercontebtinitComponent;
  let fixture: ComponentFixture<NgaftercontebtinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgaftercontebtinitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgaftercontebtinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
