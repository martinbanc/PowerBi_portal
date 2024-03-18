import BarChart from "./BarChart";
import LineGraph from "./LineGraph";
import ComparisonBarChart from "./ComparisonBarChart";

const CardContainer = () => {
    return (
        <>
                <div className="card-wrapper">
                   
                        <div className="col-4">
                            <h2><br />Bar Chart</h2>
                            <div className="bar-chart-container chart-container">
                                <BarChart />
                            </div>
                        </div>
                        <div className="col-4">
                            <h2><br />Line Graph</h2>
                            <div className="line-graph-container chart-container">
                                <LineGraph />
                            </div>
                        </div>
                        <div className="col-4">
                            <h2><br />Yearly changes</h2>
                            <div className="line-graph-container chart-container">
                                <LineGraph />
                            </div>
                        </div>
                        <div className="col-4">
                            <h2><br />Comparison Bar Chart</h2>
                            <div className="comparison-chart-container chart-container">
                                <ComparisonBarChart />
                            </div>
                        </div>
                    
                </div>
            </>
    )
}

export default CardContainer;