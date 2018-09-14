import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyQuantitativeComponent } from './company-quantitative.component';

describe('CompanyQuantitativeComponent', () => {
  let component: CompanyQuantitativeComponent;
  let fixture: ComponentFixture<CompanyQuantitativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyQuantitativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyQuantitativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
