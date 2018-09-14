import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLabelComponent } from './company-label.component';

describe('CompanyLabelComponent', () => {
  let component: CompanyLabelComponent;
  let fixture: ComponentFixture<CompanyLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
