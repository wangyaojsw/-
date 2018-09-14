import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-company-order',
  templateUrl: './company-order.component.html',
  styleUrls: ['./company-order.component.css']
})
export class CompanyOrderComponent implements OnInit {
  options;

  constructor(
  ) { }

  ngOnInit() {
    const maxData = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
    const resourceCnt = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];
    const companydata = ['公司1', '公司2', '公司3', '公司4', '公司5', '公司6', '公司7', '公司8', '公司9', '公司10'];
    this.options = {
      grid: {
        left: '15',
        top: '0',
        right: '24',
        bottom: '20',
        containLabel: true
      },
      xAxis: [{
        show: false
      }],
      yAxis: [{
        splitLine: { show: false },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#1798cf'
          }
        },
        axisLabel: {
          fontSize: '12'
        },
        axisTick: {
          show: false
        },
        offset: 10,
        data: companydata
      }, {
        splitLine: { show: false },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          fontSize: '10',
          fontFamily: 'myFirstFont'
        },
        axisTick: {
          show: false
        },
        offset: 10,
        data: resourceCnt
      }, {
        name: '',
        nameGap: '50',
        nameTextStyle: {
          color: '#ffffff',
          fontSize: '24'
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0)'
          }
        },
        data: []
      }],
      series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: resourceCnt,
        label: {
          normal: {
            show: false,
            position: 'right',
            formatter: function (param) {
              // return param.value + '%';
              return param.value;
            },
            textStyle: {
              color: '#fff',
              fontSize: '16'
            }
          }
        },
        barWidth: 6,
        itemStyle: {
          normal: {
            barBorderRadius: 6,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#1d6bf1'
            }, {
              offset: 1,
              color: '#1ad0fc'
            }])
          }
        },
        z: 2
      }, {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: maxData,
        barWidth: 10,
        itemStyle: {
          normal: {
            color: '#0a182e',
            barBorderRadius: 10
          }
        },
        z: 1
      }, {
        name: '外框',
        type: 'bar',
        yAxisIndex: 2,
        barGap: '-100%',
        data: maxData,
        barWidth: 12,
        itemStyle: {
          normal: {
            color: '#4e6a8c',
            borderColor: '#4e6a8c',
            barBorderRadius: 12
          }
        },
        z: 0
      }, {
        name: '内圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        yAxisIndex: 2,
        symbolSize: 14,
        itemStyle: {
          normal: {
            color: '#1367fb',
            opacity: 1
          }
        },
        z: 3
      }, {
        name: '外圆',
        type: 'scatter',
        hoverAnimation: true,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        yAxisIndex: 2,
        symbolSize: 20,
        itemStyle: {
          normal: {
            color: '#0a182e',
            borderColor: '#4e6a8c',
            opacity: 1
          }
        },
        z: 0
      }]
    };
  }

}
