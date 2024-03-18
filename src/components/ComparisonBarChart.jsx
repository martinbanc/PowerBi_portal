import { Component } from "react";
import Chart from "react-apexcharts";

export default class ComparisonBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "comparison-bar",
          width: 551, // Adjust width of the chart
          height: 308 // Adjust height of the chart
        },
        xaxis: {
          categories: ["Product A", "Product B"]
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
          colors: ['#2196F3', '#f15a29']
        },
        legend: {
            labels: {
              colors: "#000000" // Black labels
            },
            markers: {
              fillColors: ['#2196F3', '#f15a29'] // Blue and orange colors for the legend markers
            }
          }
      },
      series: [
        {
          name: "Forecasted Revenue",
          data: [20000, 25000]
        
        },
        {
          name: "Actual Revenue",
          data: [18000, 22000]
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

