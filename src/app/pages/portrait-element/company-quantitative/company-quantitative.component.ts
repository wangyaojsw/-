import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-company-quantitative',
  templateUrl: './company-quantitative.component.html',
  styleUrls: ['./company-quantitative.component.css']
})
export class CompanyQuantitativeComponent implements OnInit {

  assetAllocationActive = true;
  assetAllocationForItseltActive = false;
  assetAnalyseActive = false;

  assetAllocationPie;
  assetAllocationPieItseft;
  assetAllocationline;
  assetAllocationlineItSelf;
  stockTop10;
  stockTop10ItSelf;
  IndustryRatio;
  IndustryRatioItSelf;
  ModelRadar = [];
  Assetattribution = [];

  constructor() { }

  ngOnInit() {
    this.assetAllocationPie = this.initAssetAllocationPie({
      scaleData: [
        {
          'name': '股票',
          'value': 158149.41
        },
        {
          'name': '基金',
          'value': 0
        },
        {
          'name': '债券',
          'value': 906.43
        },
        {
          'name': '金融衍生品',
          'value': 4505.67
        },
        {
          'name': '其他资产',
          'value': 256.64
        },
        {
          'name': '现金',
          'value': 18487.75
        },
        {
          'name': '买入返售债券',
          'value': 13200
        },
      ]
    });
    this.assetAllocationPieItseft = this.initAssetAllocationPie({
      scaleData: [
        {
          'name': '股票',
          'value': 32.57
        },
        {
          'name': '债券',
          'value': 34.81
        },
        {
          'name': '现金',
          'value': 26.61
        },
      ]
    });
    this.assetAllocationline = this.initAssetAllocationline({
      name: ['股票', '基金', '债券', '金融衍生', '现金', '返售债券', '其他'],
      data: [
        [60.6, 65.5, 70.5, 73.1, 75, 80],
        [17.4, 13.7, 13.5, 3.4, 15.2, 13.5],
        [13.4, 7.4, 13.7, 13.5, 16.1, 13.7],
        [3.5, 15.2, 16.1, 17.4, 13.4, 6.1],
        [16.1, 13.5, 3.7, 17.4, 15.2, 18.9],
        [17.4, 6.1, 13.4, 15.2, 13.7, 5.2],
      ]
    });
    this.assetAllocationlineItSelf = this.initAssetAllocationline({
      name: ['股票', '债券', '现金'],
      data: [
        [61.50, 63.52, 53.95, 45.16, 38.99, 36.58],
        [19.41, 18.93, 29.60, 24.49, 26.36, 29.23],
        [10.88, 12.96, 16.97, 25.88, 33.40, 26.02],
      ]
    });
    this.stockTop10 = this.initStockTop10(
      {
        xAxis: ['隆基股份', '中国平安', '腾讯控股', '药明生物', '伊利股份', '中国软件国际', '金蝶国际', '康得新', '五粮液', '中芯国际'],
        data: [11684, 11299, 8920, 7366, 6395, 6320, 6123, 6014, 5866, 5697]
      }
    );
    this.stockTop10ItSelf = this.initStockTop10(
      {
        xAxis: ['格力电器', '中国平安', '招商银行', '华东医药', '隆基股份', '启明星辰', '大华股份', '海螺水泥', '海康威视', '伊利股份'],
        data: [234342.65, 184486.01, 171170.67, 165897.39, 135541.23, 125302.59, 110987.92, 99201.92, 93352.06, 93342.11]
      }
    );
    this.IndustryRatio = this.initIndustryRatio({
      scaleData: [
        {
          'name': '港股',
          'value': 36.63
        },
        {
          'name': '食品饮料',
          'value': 8.32
        },
        {
          'name': '电气设备',
          'value': 6.96
        },
        {
          'name': '化工',
          'value': 6.59
        },
        {
          'name': '计算机',
          'value': 4.61
        },
        {
          'name': '家用电器',
          'value': 3.48
        },
        {
          'name': '非银金融',
          'value': 2.61
        },
        {
          'name': '综合',
          'value': 2.12
        },
        {
          'name': '农林牧渔',
          'value': 1.86
        },
        {
          'name': '医药生物',
          'value': 1.65
        },
      ]
    });
    this.IndustryRatioItSelf = this.initIndustryRatio({
      scaleData: [
        {
          'name': '制造业',
          'value': 5464967.21
        },
        {
          'name': '金融业',
          'value': 1111831.01
        },
        {
          'name': '信息传输、软件和信息技术服务业',
          'value': 649022.00
        },
        {
          'name': '批发和零售业',
          'value': 420887.87
        },
        {
          'name': '房地产业',
          'value': 383409.68
        },
        {
          'name': '交通运输、仓储和邮政业',
          'value': 302481.78
        },
        {
          'name': '采矿业',
          'value': 301955.51
        },
        {
          'name': '文化、体育和娱乐业',
          'value': 271958.97
        },
        {
          'name': '建筑业',
          'value': 169167.33
        },
        {
          'name': '卫生和社会工作',
          'value': 160911.18
        },
        {
          'name': '电力、热力、燃气及水生产和供应业',
          'value': 151410.90
        },
        {
          'name': '租赁和商务服务业',
          'value': 89314.91
        },
        {
          'name': '农、林、牧、渔业',
          'value': 78746.78
        },
        {
          'name': '住宿和餐饮业',
          'value': 21097.53
        },
        {
          'name': '科学研究和技术服务业',
          'value': 20152.86
        },
        {
          'name': '综合',
          'value': 3165.04
        },
        {
          'name': '教育',
          'value': 126.14
        },
      ]
    });
    this.initModelRader({
      data: [1, 3, 1], title: 'T-M模型',
      indicator: [{ name: '选股能力', max: 3 }, { name: '系统性风险', max: 3 }, { name: '择时能力', max: 3 }]
    }, 'T-M');
    this.initModelRader({
      data: [1, 3, 1], title: 'H-M模型',

      indicator: [{ name: '选股能力', max: 3 }, { name: '系统性风险', max: 3 }, { name: '择时能力', max: 3 }]
    }, 'H-M');
    this.initModelRader({
      data: [1, 3, 1], title: 'C-L模型',

      indicator: [{ name: '选股能力', max: 3 }, { name: '系统性风险', max: 3 }, { name: '择时能力', max: 3 }]
    }, 'C-L');
    this.initModelRader({
      data: [1, 3, 1, 2], title: 'F-F模型',

      indicator: [{ name: '选股能力', max: 3 }, { name: '系统性风险', max: 3 }, { name: '规模风格', max: 3 }, { name: '价值风格', max: 3 }]
    }, 'F-F');
    this.initAssetattribution({}, '');
  }

  public assetAllocationClick() {
    this.assetAllocationActive = true;
    this.assetAnalyseActive = false;
    this.assetAllocationForItseltActive = false;
  }

  public assetAnalyseClick() {
    this.assetAllocationActive = false;
    this.assetAnalyseActive = true;
    this.assetAllocationForItseltActive = false;
  }

  public assetAllocationItselfClick() {
    this.assetAllocationActive = false;
    this.assetAnalyseActive = false;
    this.assetAllocationForItseltActive = true;
  }

  public initAssetAllocationPie(InData) {
    const scaleData = InData.scaleData;
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
      radius: [90, 95],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'outside',
            color: '#ddd',
            formatter: function (params) {
              let percent = '0';
              let total = 0;
              for (let i = 0; i < scaleData.length; i++) {
                total += scaleData[i].value;
              }
              percent = ((params.value / total) * 100).toFixed(0);
              if (params.name !== '') {
                return params.name + '{white|' + '' + percent + '%}';
              } else {
                return '';
              }
            },
            rich: rich
          },
          labelLine: {
            show: false
          }
        }
      },
      data: data
    }];
    const options = {
      backgroundColor: 'rgba(0,0,0,0.4)',
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
        text: '资产配置',
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
    return options;
  }

  public initAssetAllocationline(Indata) {
    const xData = function () {
      const xdata = [];
      for (let i = 2011; i < 2017; i++) {
        xdata.push(i + '年');
      }
      return xdata;
    }();
    const color = ['#1a9bfc', '#99da69', '#e32f46', '#7049f0', '#fa704d', '#01babc', 'yellow'];
    const name = Indata.name;
    const data = Indata.data;

    const series = [];
    for (let i = 0; i < 7; i++) {
      series.push({
        name: name[i],
        type: 'line',
        symbolSize: 3, // 标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
        symbol: 'circle', // 标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        smooth: true, // 是否平滑曲线显示
        showSymbol: false, // 是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: color[i]
            }, {
              offset: 0.8,
              color: 'rgba(255,255,255,0)'
            }], false),
            // shadowColor: 'rgba(255,255,255, 0.1)',
            shadowBlur: 10,
            opacity: 0.3,
          }
        },
        itemStyle: {
          normal: {
            color: color[i],
            lineStyle: {
              width: 1,
              type: 'solid' // 'dotted'虚线 'solid'实线
            },
            borderColor: color[i], // 图形的描边颜色。支持的格式同 color
            borderWidth: 8, // 描边线宽。为 0 时无描边。[ default: 0 ]
            barBorderRadius: 0,
            label: {
              show: false,
            },
            opacity: 0.5,
          }
        },
        data: data[i],

      });
    }
    const options = {
      backgroundColor: 'rgba(0,0,0,0.4)',
      legend: {
        top: 0,
        itemGap: 2,
        itemWidth: 5,
        textStyle: {
          color: '#fff',
          fontSize: '10'
        },
        data: name
      },
      title: {
        text: '',
        textStyle: {
          color: '#fff',
          fontSize: '22',
          fontWeight: 'normal',
        },
        subtextStyle: {
          color: '#90979c',
          fontSize: '16',

        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'line', // 默认为直线，可选为：'line' | 'shadow'
          lineStyle: {
            color: '#57617B'
          }
        },
        formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />{a3}: {c3}%<br />{a4}: {c4}%<br />{a5}: {c5}%',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], // 内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', // 添加阴影
      },
      grid: {
        borderWidth: 0,
        top: 40,
        bottom: 25,
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: [{
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#32346c'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#32346c ',
          }
        },
        boundaryGap: false, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLabel: {
          inside: false,
          textStyle: {
            color: '#bac0c0',
            fontWeight: 'normal',
            fontSize: '12',
          },
        },
        data: xData,
      }],
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#32346c',
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#32346c ',
          }
        },
        axisLabel: {
          textStyle: {
            color: '#bac0c0',
            fontWeight: 'normal',
            fontSize: '12',
          },
          formatter: '{value}%',
        },
      },
      series: series,
    };
    return options;
  }

  public initStockTop10(Indata) {
    const options = {
      backgroundColor: 'rgba(0,0,0,0.4)',
      title: {
        text: '前10重仓股',
        textStyle: {
          color: '#fff',
          fontSize: '12',
          fontWeight: 'normal',
        },
        subtextStyle: {
          color: '#90979c',
          fontSize: '12',

        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: Indata.xAxis,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#063374',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          show: true,
          inside: false,
          rotate: 45,
          margin: 2,
          textStyle: {
            fontSize: 8,
            color: '#a5a6bb'
          }
        },
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          formatter: '{value} 万'
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#00c7ff',
            width: 1,
            type: 'solid'
          },
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#063374',
          }
        }
      }],
      series: [{
        type: 'bar',
        data: Indata.data,
        // barWidth: 50, //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#00fcae'
            }, {
              offset: 1,
              color: '#006388'
            }]),
            opacity: 1,
          }
        }
      }]
    };
    return options;
  }

  public initIndustryRatio(Indata) {
    const scaleData = Indata.scaleData;
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
      radius: [60, 65],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'outside',
            color: '#ddd',
            formatter: function (params) {
              let percent = '0';
              let total = 0;
              for (let i = 0; i < scaleData.length; i++) {
                total += scaleData[i].value;
              }
              percent = ((params.value / total) * 100).toFixed(0);
              if (params.name !== '') {
                return params.name + '{white|' + '' + percent + '%}';
              } else {
                return '';
              }
            },
            rich: rich
          },
          labelLine: {
            show: false
          }
        }
      },
      data: data
    }];
    const options = {
      backgroundColor: 'rgba(0,0,0,0.4)',
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
        text: '行业配置',
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
    return options;
  }

  public initModelRader(data, index) {
    const indicatorData = data.indicator;
    const valueData = data.data;
    this.ModelRadar[index] = {
      backgroundColor: 'rgba(0,0,0,0.4)',
      tooltip: {
        transitionDuration: 0,
        backgroundColor: 'rgba(83,93,105,0.8)',
        borderColor: '#535b69',
        borderRadius: 8,
        borderWidth: 2,
        padding: [5, 10]
      },
      title: {
        text: data.title,
        textStyle: {
          fontWeight: 'normal',
          fontSize: 12,
          color: '#fff',
        }
      },
      radar: {
        shape: 'circle',
        splitNumber: 10,
        name: {
          formatter: '{value}',
          textStyle: {
            color: '#1bb9f9',
            fontSize: 10
          }
        },
        indicator: indicatorData,
        center: ['50%', '50%'],
        radius: 30,
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

  public initAssetattribution(data, index) {
    const myData = ['股票', '债券', '其他未分类', '其他', '衍生品多头', '港股'];
    const lineData = [10, 10, 10, 10, 10, 10];
    const lastYearData = {
      1: [0, 0, 0, 0, 2, 1]
    };
    const thisYearData = {
      1: [10, 0, 0, 0, 0, 0]
    };
    const timeLineData = [1];
    const background = 'rgba(0,0,0,0.4)'; // 背景

    const option = {
      baseOption: {
        backgroundColor: background,
        timeline: {
          show: false,
          top: 0,
          data: []
        },
        title: {
          text: '资产归因',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#fff',
          }
        },
        grid: [{
          show: false,
          left: '5%',
          top: '10%',
          bottom: '8%',
          containLabel: true,
          width: '37%'
        }, {
          show: false,
          left: '51%',
          top: '10%',
          bottom: '8%',
          width: '0%'
        }, {
          show: false,
          right: '2%',
          top: '10%',
          bottom: '8%',
          containLabel: true,
          width: '37%'
        }],
        xAxis: [{
          type: 'value',
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          position: 'top',
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          show: false
        }, {
          gridIndex: 2,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          position: 'top',
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          inverse: true,
          position: 'right',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          data: myData
        }, {
          gridIndex: 1,
          type: 'category',
          inverse: true,
          position: 'left',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff',
              fontSize: 10
            }

          },
          data: myData.map(function (value) {
            return {
              value: value,
              textStyle: {
                align: 'center'
              }
            };
          })
        }, {
          gridIndex: 2,
          type: 'category',
          inverse: true,
          position: 'left',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false

          },
          data: myData
        }],
        series: []

      },
      options: []
    };

    option.baseOption.timeline.data.push(timeLineData[0]);
    option.options.push({
      series: [
        {
          type: 'pictorialBar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          symbol: 'rect',
          itemStyle: {
            normal: {
              color: 'rgba(3,147,114,0.27)'
            }
          },
          barWidth: 10,
          symbolRepeat: true,
          symbolSize: 14,
          data: lineData,
          barGap: '-100%',
          barCategoryGap: 0,
          label: {
            normal: {
              show: true,
              formatter: (series) => {
                return lastYearData[timeLineData[0]][series.dataIndex] + '%';
              },
              position: 'insideTopLeft',
              textStyle: {
                color: '#ffffff',
                fontSize: 10,
              },
              offset: [-10, -15],
            }
          },
          z: -100,
          animationEasing: 'elasticOut',
          animationDelay: function (dataIndex, params) {
            return params.index * 30;
          }
        }, {
          name: '2017',
          type: 'pictorialBar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          symbol: 'rect',
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: '#039372'
            }
          },
          symbolRepeat: true,
          symbolSize: 14,
          data: lastYearData[timeLineData[0]],
          animationEasing: 'elasticOut',
          animationDelay: function (dataIndex, params) {
            return params.index * 30 * 1.1;
          }
        },
        {
          type: 'pictorialBar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          symbol: 'rect',
          itemStyle: {
            normal: {
              color: 'rgba(54,215,182,0.27)'
            }
          },
          barWidth: 10,
          symbolRepeat: true,
          symbolSize: 14,
          data: lineData,
          barGap: '-100%',
          barCategoryGap: 0,
          label: {
            normal: {
              show: true,
              formatter: (series) => {
                return thisYearData[timeLineData[0]][series.dataIndex] + '%';
              },
              position: 'insideTopRight',
              textStyle: {
                color: '#ffffff',
                fontSize: 10,
              },
              offset: [0, -15],
            }
          },
          z: -100,
          animationEasing: 'elasticOut',
          animationDelay: function (dataIndex, params) {
            return params.index * 30;
          }
        }, {
          name: '2018',
          type: 'pictorialBar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          symbol: 'rect',
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: '#36d7b6'
            }
          },
          symbolRepeat: true,
          symbolSize: 14,
          data: thisYearData[timeLineData[0]],
          animationEasing: 'elasticOut',
          animationDelay: function (dataIndex, params) {
            return params.index * 30 * 1.1;
          }
        }
      ]
    });
    this.Assetattribution[0] = option;
  }

}
