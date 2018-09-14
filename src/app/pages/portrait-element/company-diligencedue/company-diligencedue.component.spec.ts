import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDiligencedueComponent } from './company-diligencedue.component';

describe('CompanyDiligencedueComponent', () => {
  let component: CompanyDiligencedueComponent;
  let fixture: ComponentFixture<CompanyDiligencedueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDiligencedueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDiligencedueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
