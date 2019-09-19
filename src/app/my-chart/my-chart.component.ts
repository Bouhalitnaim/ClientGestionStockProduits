import {AfterViewChecked, Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ChartComponent} from 'angular2-chartjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements AfterViewChecked {


  @ViewChildren('graphElement')
  private graphElement: ChartComponent ;

  @Input()
  title: String ='Tittre';

  @Input()
  type: String = 'bar';


  @Input()
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  @Input()
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() {
  }


  ngAfterViewChecked(){
    this.graphElement.chart.update();
  }

}
