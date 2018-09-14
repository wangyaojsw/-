import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-label',
  templateUrl: './company-label.component.html',
  styleUrls: ['./company-label.component.css']
})
export class CompanyLabelComponent implements OnInit {

  CompanyInternationalLabelActive = false;
  CompanyNativeLabelActive = true;
  CompanyFinancialLabelActive = false;

  NativeLabel;
  InternationalLabel;
  FinancialLabel;

  constructor(
  ) { }

  public CompanyNativeLabelClick() {
    this.CompanyInternationalLabelActive = false;
    this.CompanyFinancialLabelActive = false;
    this.CompanyNativeLabelActive = true;
  }

  public CompanyInternationalLabelClick() {
    this.CompanyInternationalLabelActive = true;
    this.CompanyFinancialLabelActive = false;
    this.CompanyNativeLabelActive = false;
  }

  public CompanyFinancialLabelClick() {
    this.CompanyInternationalLabelActive = false;
    this.CompanyFinancialLabelActive = true;
    this.CompanyNativeLabelActive = false;
  }

  ngOnInit() {
    this.initNativeLabel();
    this.initInternationalLabel();
    this.initFinancialLabel();
  }

  private initNativeLabel() {
    const indicatorData = [{ name: '风控独立性' }, { name: '投研力量' }, { name: 'IT技术储备支持' }];
    const valueData = [2, 3, 2];
    this.NativeLabel = {
      tooltip: {
        transitionDuration: 0,
        backgroundColor: 'rgba(83,93,105,0.8)',
        borderColor: '#535b69',
        borderRadius: 8,
        borderWidth: 2,
        padding: [5, 10]
      },
      radar: {
        shape: 'circle',
        splitNumber: 4,
        name: {
          formatter: '{value}',
          textStyle: {
            color: '#1bb9f9',
            fontSize: 10
          }
        },
        indicator: indicatorData,
        center: ['50%', '50%'],
        radius: 70,
        splitArea: {
          areaStyle: {
            color: ['rgba(11,35,74,0.7)', 'rgba(11,32,67,0.6)', 'rgba(11,30,62,0.4)', 'rgba(14,29,63,0.2)'],
            shadowColor: 'rgba(11,32,67,0.6)',
            shadowBlur: 1
          }
        },
        axisLine: {
          lineStyle: {
            type: 'dashed',
            color: '#132f4c',
            textStyle: {
              color: '#19a3de'
            }
          }
        },
        axisLabel: {
          color: '#19a3de'
        },
        splitLine: {
          lineStyle: {
            normal: {
              type: 'solid'
            },
            shadowColor: 'rgba(12,30,64,1)',
            shadowBlur: 1,
            color: 'rgba(11,37,78,1)'
          }
        }
      },
      series: [{
        type: 'radar',
        symbolSize: 3,
        name: '资源来源',
        itemStyle: {
          normal: {
            color: 'rgba(28,155,246,1)'
          }
        },
        areaStyle: {
          normal: {
            color: 'rgba(13, 58, 95, 0.5)'
          }
        },
        data: [{ value: valueData }]
      }]
    };
  }

  public initInternationalLabel() {
    const JosnList = [
      { name: '业务布局宽泛', value: 14 },
      { name: '海外扩张', value: 12 },
      { name: '赵学军', value: 13 },
      { name: '500强基金公司', value: 20 },
      { name: '老十家', value: 15 },
      { name: '不如货基', value: 16 },
      { name: '跌多涨少', value: 17 },
      { name: '经常踩雷', value: 18 },
      { name: '成立20年', value: 19 },
      { name: '研究驱动投资', value: 25 },
      { name: '基金经理水平有限', value: 5 },
      { name: '亏损', value: 20 },
      { name: '张丹华', value: 3 },
      { name: '张自力', value: 4 },
      { name: '张金涛', value: 3 },
      { name: '姚志鹏', value: 2 },
      { name: '炒概念的基金', value: 1 },
      { name: '香港子公司', value: 23},
      { name: '跌出前十', value: 15 },
      { name: '股票型基金同类第一', value: 2 },
      { name: '赎回率为负数', value: 20 },
      { name: '赎回份额近300亿份', value: 2 },
      { name: '股基每月发行规模下降', value: 4 },
      { name: '五星评级', value: 4 },
      { name: '基金经理换人', value: 6 },
      { name: '不温不火', value: 30 },
      { name: '长期持有', value: 20 },
      { name: '低风险', value: 1 },
      { name: '刘天君', value: 4 },
      { name: '配比稳健', value: 1 },
      { name: '邵健', value: 2 },
      { name: '过于依赖制造业', value: 3 },
      { name: '忽略新兴行业和利好行业', value: 2 },
      { name: '经理更换频繁', value: 4 },
      { name: '估值相差大', value: 5 }];
    this.InternationalLabel = {
      title: {
        // text: '',
        x: 'center',
        textStyle: {
          fontSize: 23
        }
      },
      tooltip: {
        transitionDuration: 0,
        backgroundColor: 'rgba(83,93,105,0.8)',
        borderColor: '#535b69',
        borderRadius: 8,
        borderWidth: 2,
        padding: [5, 10],
        show: true,
        formatter: '{a} <br/>{b}: {c}'
      },
      series: [{
        name: '知识点分布',
        type: 'wordCloud',
        // size: ['9%', '99%'],
        sizeRange: [10, 26],
        // textRotation: [0, 45, 90, -45],
        rotationRange: [0, 0],
        // shape: 'circle',
        textPadding: 0,
        autoSize: {
          enable: true,
          minSize: 6
        },
        textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: JosnList
      }]
    };
  }

  public initFinancialLabel() {
    const teachResearchSeriesData1 = [];
    const teachResearchSeriesData2 = [];
    const indicator =
      [{ name: '气很长 ' }, { name: '现金流状况一般.' }, { name: '收款很快.' }, { name: '重资产,周转很慢，风险高!' }, { name: '还好现金超级多!' },
      { name: '卖货很慢,属于原物料或低频消费品.' }, { name: '不需要资金就可以做生意!' }, { name: '一轮生意要161.9天.' }, { name: '毛利很高,费用率22.6个点' },
      { name: '税后利润不错,' }, { name: '能够打败巴菲特的回报率.' }, { name: '每一股在去年为公司赚了2.53元钱' }, { name: '杆杠稳健,' }, { name: '长期资金源源不断!' },
      { name: '如果发生债务纠纷,可能缺乏立即清偿能力.' }];
    this.FinancialLabel = {
      radar: [
        {
          indicator: indicator,
          center: ['50%', '55%'],
          radius: 70,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          name: {
            formatter: '{value}',
            textStyle: {
              color: '#fff',
              fontSize: 10,
            }
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(14,52,111,0.9)', 'rgba(14,52,111,0.8)', 'rgba(14,52,111,0.6)', 'rgba(14,52,111,0.4)', 'rgba(14,52,111,0.2)'],
              // shadowColor: 'rgba(11, 38, 78, 0.3)',
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(17,51,78,1)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(14, 58, 125,0.5)'
            }
          }
        }
      ],
      series: [
        {
          name: '雷达图',
          type: 'radar',
          symbol: 'none',
          itemStyle: {
            emphasis: {
              lineStyle: {
                width: 4
              }
            }
          },
          data: [
            {
              value: teachResearchSeriesData1,
              name: '图一',
              lineStyle: {
                normal: {
                  color: '#fde649'
                }
              },
              areaStyle: {
                normal: {
                  color: 'rgba(62, 102, 111, 0.5)'
                }
              }
            },
            {
              value: teachResearchSeriesData2,
              name: '图二',
              lineStyle: {
                normal: {
                  color: 'rgba(28, 155, 246, 0.5)'
                }
              },
              areaStyle: {
                normal: {
                  color: 'rgba(14, 64, 108, 0.5)'
                }
              }
            }
          ]
        }
      ]
    };
  }

}
