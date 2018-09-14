import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-introduction',
  templateUrl: './company-introduction.component.html',
  styleUrls: ['./company-introduction.component.css']
})
export class CompanyIntroductionComponent implements OnInit {

  CompanyIntroductionActive = false;
  CompanySizeActive = true;

  shareStructure;
  AssetManagementStructure;

  constructor() { }

  ngOnInit() {
    this.initShareStructure();
    this.initAssetManagementStructure();
  }

  public CompanySizeClick() {
    this.CompanyIntroductionActive = false;
    this.CompanySizeActive = true;
  }

  public CompanyIntroduntionClick() {
    this.CompanyIntroductionActive = true;
    this.CompanySizeActive = false;
  }

  private initShareStructure() {
    const scaleData = [{
      'name': '中诚信托',
      'value': 40
    },
    {
      'name': '立信投资',
      'value': 30
    },
    {
      'name': '德意志资管',
      'value': 30
    },
    ];
    const rich = {
      white: {
        color: '#ddd',
        align: 'center',
        padding: [0, 3],
        fontSize: 9
      }
    };
    const placeHolderStyle = {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
      }
    };
    const data = [];
    const color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000'];
    for (let i = 0; i < scaleData.length; i++) {
      data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: color[i],
            shadowColor: color[i]
          }
        }
      }, {
          value: 2,
          name: '',
          itemStyle: placeHolderStyle
        });
    }
    const seriesObj = [{
      name: '',
      type: 'pie',
      clockWise: false,
      radius: [35, 40],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'outside',
            color: '#ddd',
            textStyle: {
              color: '#19a3de',
              fontSize: 8,
            },
            formatter: function (params) {
              let percent = '';
              let total = 0;
              for (let i = 0; i < scaleData.length; i++) {
                total += scaleData[i].value;
              }
              percent = ((params.value / total) * 100).toFixed(0);
              if (params.name !== '') {
                return params.name + '\n{white|' + percent + '%}';
              } else {
                return '';
              }
            },
            rich: rich
          },
          labelLine: {
            length: 2,
            length2: 2,
            show: true,
            color: '#00ffff'
          }
        }
      },
      data: data
    }];
    this.shareStructure = {
      backgroundColor: 'rgba(0,0,0,0)',
      tooltip: {
        trigger: 'item',
        transitionDuration: 0,
        backgroundColor: 'rgba(83,93,105,0.8)',
        borderColor: '#535b69',
        borderRadius: 8,
        borderWidth: 2,
        padding: [5, 10],
        formatter: '<p class="center">{b}</p><p class="center">{c}({d}%)</p>'
      },
      title: {
        text: '股权配置',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 12,
          color: '#fff',
        }
      },
      legend: {
        show: false
      },
      toolbox: {
        show: false
      },
      series: seriesObj
    };
  }

  private initAssetManagementStructure() {
    const scaleData = [{
      'name': '公募基金',
      'value': 3158
    },
    {
      'name': '私募基金',
      'value': 2906
    }
    ];
    const rich = {
      white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0],
        fontSize: 9,
      }
    };
    const placeHolderStyle = {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
      }
    };
    const data = [];
    const color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000'];
    for (let i = 0; i < scaleData.length; i++) {
      data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: color[i],
            shadowColor: color[i]
          }
        }
      }, {
          value: 2,
          name: '',
          itemStyle: placeHolderStyle
        });
    }
    const seriesObj = [{
      name: '',
      type: 'pie',
      clockWise: false,
      radius: [35, 40],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'outside',
            color: '#ddd',
            textStyle: {
              color: '#19a3de',
              fontSize: 8,
            },
            formatter: function (params) {
              let percent = '';
              let total = 0;
              for (let i = 0; i < scaleData.length; i++) {
                total += scaleData[i].value;
              }
              percent = ((params.value / total) * 100).toFixed(0);
              if (params.name !== '') {
                return params.name + '\n{white|' + percent + '%}';
              } else {
                return '';
              }
            },
            rich: rich
          },
          labelLine: {
            length: 1,
            length2: 2,
            show: true,
            color: '#00ffff'
          }
        }
      },
      data: data
    }];
    this.AssetManagementStructure = {
      backgroundColor: 'rgba(0,0,0,0)',
      tooltip: {
        trigger: 'item',
        transitionDuration: 0,
        backgroundColor: 'rgba(83,93,105,0.8)',
        borderColor: '#535b69',
        borderRadius: 8,
        borderWidth: 2,
        padding: [5, 10],
        formatter: '<p class="center">{b}</p><p class="center">{c}({d}%)</p>'
      },
      title: {
        text: '资产管理\n结构',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 12,
          color: '#fff',
        }
      },
      legend: {
        show: false
      },
      toolbox: {
        show: false
      },
      series: seriesObj
    };
  }
}
