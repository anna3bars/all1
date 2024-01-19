import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapingComponent } from './bootstraping.component';

describe('BootstrapingComponent', () => {
  let component: BootstrapingComponent;
  let fixture: ComponentFixture<BootstrapingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
