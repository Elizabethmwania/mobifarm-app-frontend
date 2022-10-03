import React, { Component } from 'react';
import CanvasJSReact from '../../../canvasjs-3.6.7/canvasjs.react';

//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class BarGraph extends Component {
    render() {
        const options = {
            title: {
              text: "Loans Disbursements "
            },
            data: [{				
                      type: "column",
                      dataPoints: [
                          { label: "Apple",  y: 10  },
                          { label: "Orange", y: 15  },
                          { label: "Banana", y: 25  },
                          { label: "Mango",  y: 30  },
                          { label: "Grape",  y: 28  }
                      ]
             }]
         }
        return (
            <div style={{paddingTop:20}}>
                <CanvasJSChart options = {options}
                    /* onRef = {ref => this.chart = ref} */
                />
            </div>
        );
    }
}

export default BarGraph;