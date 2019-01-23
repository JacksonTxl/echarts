import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  flag = false;
  options: any[] = [{
    value: 'waihui',
    label: '外汇',
    children: [{
      value: '0',
      label: '外汇一组',
      children: [{
        value: '1',
        label: '项目一',
      }, {
        value: '2',
        label: '项目二',
      }, {
        value: '3',
        label: '项目三',
      }, {
        value: '4',
        label: '项目四',
      }],
    }],
  }, {
    value: 'testlink',
    label: 'testlink',
    children: [{
      value: '0',
      label: '项目一',
    }, {
      value: '1',
      label: '项目二',
    }, {
      value: '2',
      label: '项目三',
    }],
  }];
  constructor() { }

  ngOnInit() {
    this.initPipe();
    this.initBar();
    this.initLine1();
    this.initLine2();
  }

  initPipe () {

    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init((document.getElementById('pipe')) as any);

    const option: any = {
      title : {
        text: '用例分布图',
        subtext: '统计结果',
        x: 'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['外币', '外汇', '交易后', '其他']
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data: [
            {value: 335, name: '外币'},
            {value: 310, name: '外汇'},
            {value: 234, name: '交易后'},
            {value: 135, name: '其他'},
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    if (this.flag) {
      const arr = this.randomArray(4);
      option.series[0].data[0].value = arr[0];
      option.series[0].data[1].value = arr[1];
      option.series[0].data[2].value = arr[2];
      option.series[0].data[3].value = arr[3];
    }
    // 绘制图表
    myChart.setOption(option);
  }

  initBar () {

    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init((document.getElementById('bar')) as any);

    const option: any = {
      title: {
        text: '自动化对比图'
      },
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['自动化', '未自动化']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['货币网', '外汇', '交易后']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name: '自动化',
          type: 'bar',
          data: [320, 332, 301]
        },
        {
          name: '未自动化',
          type: 'bar',
          data: [120, 132, 101]
        }
      ]
    };
    if (this.flag) {
      const arr = this.randomArray(3);
      option.series[0].data = arr;
      const arr1 = this.randomArray(3);
      option.series[1].data = arr1;

    }
    // 绘制图表
    myChart.setOption(option);
  }

  initLine1 () {

    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init((document.getElementById('line1')) as any);

    const option: any = {
      title: {
        text: '需求分析曲线'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['BPM需求', '执行数量']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六',  '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'BPM需求',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '执行数量',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    };
    if (this.flag) {
      const arr = this.randomArray(7);
      option.series[0].data = arr;
      const arr1 = this.randomArray(7);
      option.series[1].data = arr1;
    }
    // 绘制图表
    myChart.setOption(option);
  }

  initLine2 () {

    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init((document.getElementById('line2')) as any);

    const option: any = {
      title: {
        text: '缺陷曲线'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['新增缺陷数', '关闭缺陷数']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六',  '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '新增缺陷数',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '关闭缺陷数',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    };
    if (this.flag) {
      const arr = this.randomArray(7);
      option.series[0].data = arr;
      const arr1 = this.randomArray(7);
      option.series[1].data = arr1;
    }
    // 绘制图表
    myChart.setOption(option);
  }

  randomArray (arrLength: number) {
    if (arrLength <= 0) {
      return;
    }
    const arr = [];
    for (let i = 0; i < arrLength; i++) {
      let num = Math.random();
      num = parseInt(num * 1000, 10);
      arr[i] = num;
    }
    return arr;
  }

  changeHandle (event) {
    if (event.length > 0) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    this.initPipe();
    this.initBar();
    this.initLine1();
    this.initLine2();
  }
}
