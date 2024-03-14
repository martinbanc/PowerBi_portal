import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          width: 551, // Adjust width of the chart
          height: 308 // Adjust height of the chart
        },
        xaxis: {
          categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
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
        fill: {
          colors: ['#2196F3', '#FF9800']
        }
      },
      series: [
        {
          name: "series-1",
          data: [3000, 8000, 12000, 15000, 18000, 20000, 22000]
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
              type="bar"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}
