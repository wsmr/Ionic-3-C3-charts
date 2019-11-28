import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as c3 from "c3";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chart_gauge : any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
  this.chart_gauge = c3.generate({
        bindto: '#chart_gauge',
        data: {
          columns: [
            ['data', 91.4]
          ],
          type: 'gauge',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
        },
        color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
            values: [30, 60, 90, 100]
          }
        },
        size: {
          height: 180
        }
      });
  }

//   Refresh() {
// 	this.autoRefreshTimer = 5;
// }

}
