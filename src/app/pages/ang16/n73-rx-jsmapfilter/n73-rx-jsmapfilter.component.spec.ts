import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N73RxJSmapfilterComponent } from './n73-rx-jsmapfilter.component';

describe('N73RxJSmapfilterComponent', () => {
  let component: N73RxJSmapfilterComponent;
  let fixture: ComponentFixture<N73RxJSmapfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N73RxJSmapfilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N73RxJSmapfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
