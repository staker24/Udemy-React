import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    
    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value)
    const totalMaximum =  Math.max(...dataPointValues);
      return (<div className="chart">
        {props.datPoint.map((dataPoint) => (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        ))}
      </div>);
}
export default Chart