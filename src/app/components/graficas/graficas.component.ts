import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


import 'chartjs-plugin-annotation';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  @ViewChild('myCanvas')
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: String = 'line';
  public chartData: any[];
  public chartLabels: any[];
  public chartColors: any[];
  public chartOptions: any;

  ngOnInit() {

    this.chartData = [{
      data: [3, 1, 4, 2, 5],
      label: 'Anthracnose',
      fill: false
    }];

    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    this.chartColors = [{
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
         borderColor: 'rgba(255, 0, 0, 1)',
         pointBackgroundColor: 'rgba(255, 0, 0, 1)'
    }];

    this.chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      annotation: {
         drawTime: 'beforeDatasetsDraw',
         annotations: [{
            type: 'box',
            id: 'a-box-1',
            yScaleID: 'y-axis-0',
            yMin: 0,
            yMax: 1,
            backgroundColor: '#FFF'
         }
         ]
      }
    };
  }

}
