import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  CircularGaugeComponent,
  ILoadedEventArgs,
  GaugeTheme,
} from '@syncfusion/ej2-angular-circulargauge';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  maxScore: number = 150;   // This value would come from the getSurvey() function and would not be hard coded
  surveyScore: number = 83; // This value would come from the getSurvey() function and would not be not hard coded
  @ViewChild('gauge')
  public circularGauge: CircularGaugeComponent;
  public tooltipInterval1: number;

  public lineStyle: Object = {
    width: 0,
  };
  public labelStyle: Object = {
    offset: 0,
  };
  public majorTicks: Object = {
    width: 0,
    interval: this.maxScore / 10,
  };
  public minorTicks: Object = {
    width: 0,
  };
  public pointers: Object[] = [
    {
      value: this.surveyScore, // Set the direction of the pointer on the gauge
      radius: '85%',
      color: '#fab34b',
      animation: { enable: false },
      pointerWidth: 12,
      cap: { radius: 7, border: { color: '#fab34b', width: 2.5 }, color: 'white', },
      needleTail: { length: '0%' },
      needleStartWidth: 2,
    },
  ];
  public ranges: Object[] = [
    {
      end: this.maxScore, // Set the range of the color dial
      start: 0,
      startWidth: 10,
      endWidth: 10,
      color: '#fab34b',
      roundedCornerRadius: 10,
    },
  ];

  constructor() {
    // code
  }
}
