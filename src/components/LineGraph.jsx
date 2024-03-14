import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class LineGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-line",
          width: 551, // Adjust width of the chart
          height: 308 // Adjust height of the chart
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        yaxis: {
            labels: {
              formatter: function (val) {
                return `£${val / 1000}k`;
              },
              style: {
                colors: "#000000" // Black labels
              }
            },
            tickPlacement: 'between',
            tickValues: [0, 5000, 10000, 15000, 20000, 25000],
            min: 0,
            max: 25000,
          },
        colors: ['#2196F3', '#FF9800'] // Blue and orange colors
      },
      series: [
        {
          name: "Series 1",
          data: [5000, 10000, 15000, 20000, 25000, 20000, 15000, 9000, 12000, 15000, 18000, 21000]
        },
        {
          name: "Series 2",
          data: [3000, 6000, 9000, 12000, 15000, 18000, 21000, 15000, 20000, 25000, 20000, 15000]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}