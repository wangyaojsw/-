import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIntroductionComponent } from './company-introduction.component';

describe('CompanyIntroductionComponent', () => {
  let component: CompanyIntroductionComponent;
  let fixture: ComponentFixture<CompanyIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
