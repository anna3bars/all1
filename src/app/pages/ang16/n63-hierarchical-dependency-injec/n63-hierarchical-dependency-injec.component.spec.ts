import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N63HierarchicalDependencyInjecComponent } from './n63-hierarchical-dependency-injec.component';

describe('N63HierarchicalDependencyInjecComponent', () => {
  let component: N63HierarchicalDependencyInjecComponent;
  let fixture: ComponentFixture<N63HierarchicalDependencyInjecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N63HierarchicalDependencyInjecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N63HierarchicalDependencyInjecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
