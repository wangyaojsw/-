import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioManagedComponent } from './porfolio-managed.component';

describe('PorfolioManagedComponent', () => {
  let component: PorfolioManagedComponent;
  let fixture: ComponentFixture<PorfolioManagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfolioManagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfolioManagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
