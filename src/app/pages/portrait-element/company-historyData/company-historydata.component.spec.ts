import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHistorydataComponent } from './company-historydata.component';

describe('CompanyHistorydataComponent', () => {
  let component: CompanyHistorydataComponent;
  let fixture: ComponentFixture<CompanyHistorydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyHistorydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyHistorydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
