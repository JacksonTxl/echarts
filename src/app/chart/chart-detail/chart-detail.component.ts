import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.scss']
})
export class ChartDetailComponent implements OnInit {
  tableData: any[] = [{
    name: '测试用例1',
    date: '2017-08-19',
    address: '项目组一',
  }, {
    name: '测试用例2',
    date: '2017-08-20',
    address: '项目组一',
  }, {
    name: '测试用例3',
    date: '2017-08-21',
    address: '项目组一',
  }, {
    name: '测试用例4',
    date: '2017-08-22',
    address: '项目组一',
  }];
  constructor() { }

  ngOnInit() {
  }

}
