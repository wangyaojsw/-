import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porfolio-managed',
  templateUrl: './porfolio-managed.component.html',
  styleUrls: ['./porfolio-managed.component.css']
})
export class PorfolioManagedComponent implements OnInit {

  AllProjectLabelActive = false;
  projectManagedLabelActive = true;

  projectManaged;
  AllProject;

  constructor() { }

  public AllProjectLabelClick() {
    this.projectManagedLabelActive = false;
    this.AllProjectLabelActive = true;
  }

  public projectManagedLabelClick() {
    this.projectManagedLabelActive = true;
    this.AllProjectLabelActive = false;
  }

  ngOnInit() {
    this.initprojectManaged();
  }

  public initprojectManaged() {
    this.projectManaged = {
      backgroundColor: 'rgba(0,0,0,0)',
      title: {
        text: '',
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      color: ['#83e0ff', '#45f5ce', '#b158ff'],
      legend: {
        show: true,
        data: [
          { name: '子组合类别', textStyle: { color: '#fff' } },
          { name: '母组合', textStyle: { color: '#fff' } },
          { name: '子组合', textStyle: { color: '#fff' } }
        ],
        x: 'right',
        orient: 'vertical',
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 200,
            edgeLength: 30
          },
          symbolSize: 20,
          roam: true,
          label: {
            normal: {
              show: true
            }
          },
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 10
              },
              formatter: '{c}'
            }
          },

          data: [
            {
              name: '恒盛MOM母组合',
              symbolSize: 40,
              draggable: true,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: '#04f2a7',
                  borderWidth: 6,
                  shadowBlur: 20,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                }
              }
            },
            {
              name: '中大盘均衡',
              symbolSize: 30,
              category: 0,
              itemStyle: {
                normal: {
                  borderColor: '#82dffe',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                }
              },
            },
            {
              name: '大盘价值',
              symbolSize: 30,
              category: 0,
              itemStyle: {
                normal: {
                  borderColor: '#82dffe',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                }
              },
            },
            {
              name: '中小盘成长',
              symbolSize: 30,
              category: 0,
              itemStyle: {
                normal: {
                  borderColor: '#82dffe',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                }
              },
            },
            {
              name: '均衡主题',
              symbolSize: 30,
              category: 0,
              itemStyle: {
                normal: {
                  borderColor: '#82dffe',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                }
              },
            },
            {
              name: '恒盛嘉实',
              category: 2,
              itemStyle: {
                normal: {
                  borderColor: '#b457ff',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#b457ff',
                  color: '#001c43'
                }
              },
            },
            {
              name: '恒盛淡水泉',
              category: 2,
              itemStyle: {
                normal: {
                  borderColor: '#b457ff',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#b457ff',
                  color: '#001c43'
                }
              },
            },
          ],
          links: [
            {
              source: '恒盛MOM母组合',
              target: '中大盘均衡',
              value: '子组合',
              lineStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#e0f55a' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#639564' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              }

            },
            {
              source: '恒盛MOM母组合',
              target: '大盘价值',
              value: '子组合',
              lineStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#e0f55a' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#639564' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              }

            },
            {
              source: '恒盛MOM母组合',
              target: '大盘价值',
              value: '子组合',
              lineStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#e0f55a' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#639564' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              }

            },
            {
              source: '恒盛MOM母组合',
              target: '中小盘成长',
              value: '子组合',
              lineStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#e0f55a' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#639564' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              }

            },
            {
              source: '恒盛MOM母组合',
              target: '均衡主题',
              value: '子组合',
              lineStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#e0f55a' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#639564' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              }

            },
            {
              source: '中大盘均衡',
              target: '恒盛嘉实',
              value: '身份证ID',
              lineStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#df6f30' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#915034' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              },
            },
            {
              source: '中大盘均衡',
              target: '恒盛淡水泉',
              value: '身份证ID',
              lineStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#df6f30' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#915034' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              },
            },
          ],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 5,
              curveness: 0
            }
          },
          categories: [
            { name: '子组合类别' },
            { name: '母组合' },
            { name: '子组合' }
          ]
        }
      ]
    };
  }
}
