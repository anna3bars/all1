import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R97CreatingaRouteModuleFileComponent } from './r97-creatinga-route-module-file.component';

describe('R97CreatingaRouteModuleFileComponent', () => {
  let component: R97CreatingaRouteModuleFileComponent;
  let fixture: ComponentFixture<R97CreatingaRouteModuleFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R97CreatingaRouteModuleFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(R97CreatingaRouteModuleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
