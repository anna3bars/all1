import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AysncPipeComponent } from './aysnc-pipe.component';

describe('AysncPipeComponent', () => {
  let component: AysncPipeComponent;
  let fixture: ComponentFixture<AysncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AysncPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AysncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
