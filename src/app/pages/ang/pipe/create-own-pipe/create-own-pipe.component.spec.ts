import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwnPipeComponent } from './create-own-pipe.component';

describe('CreateOwnPipeComponent', () => {
  let component: CreateOwnPipeComponent;
  let fixture: ComponentFixture<CreateOwnPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOwnPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOwnPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
