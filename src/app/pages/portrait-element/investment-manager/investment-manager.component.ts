import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-manager',
  templateUrl: './investment-manager.component.html',
  styleUrls: ['./investment-manager.component.css']
})
export class InvestmentManagerComponent implements OnInit {

  totalManagerShow = true;
  detailshow = false;

  constructor() { }

  ngOnInit() {
  }

  public detail() {
    this.totalManagerShow = false;
    this.detailshow = true;
  }

  public goBack() {
    this.totalManagerShow = true;
    this.detailshow = false;
  }
}
