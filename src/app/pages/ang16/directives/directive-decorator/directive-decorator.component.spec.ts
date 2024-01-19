import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDecoratorComponent } from './directive-decorator.component';

describe('DirectiveDecoratorComponent', () => {
  let component: DirectiveDecoratorComponent;
  let fixture: ComponentFixture<DirectiveDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveDecoratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
