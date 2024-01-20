import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N60serviceComponent } from './n60service.component';

describe('N60serviceComponent', () => {
  let component: N60serviceComponent;
  let fixture: ComponentFixture<N60serviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N60serviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N60serviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
