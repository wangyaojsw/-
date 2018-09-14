import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CompanySizeComponent } from '../pages/portrait-element/company-size/company-size.component';
import { CompanyIntroductionComponent } from '../pages/portrait-element/company-Introduction/company-introduction.component';
import { CompanyLabelComponent } from '../pages/portrait-element/company-label/company-label.component';
import { CompanyOrderComponent } from '../pages/portrait-element/company-order/company-order.component';
import { CompanyHistorydataComponent } from '../pages/portrait-element/company-historyData/company-historydata.component';
import { CompanyDiligencedueComponent } from '../pages/portrait-element/company-diligencedue/company-diligencedue.component';
import { InvestmentManagerComponent } from '../pages/portrait-element/investment-manager/investment-manager.component';
import { PorfolioManagedComponent } from '../pages/portrait-element/porfolio-managed/porfolio-managed.component';
import { CompanyQuantitativeComponent } from '../pages/portrait-element/company-quantitative/company-quantitative.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    CompanySizeComponent,
    CompanyIntroductionComponent,
    CompanyLabelComponent,
    CompanyOrderComponent,
    CompanyHistorydataComponent,
    CompanyDiligencedueComponent,
    InvestmentManagerComponent,
    PorfolioManagedComponent,
    CompanyQuantitativeComponent,
  ],
})
export class PagesModule { }
