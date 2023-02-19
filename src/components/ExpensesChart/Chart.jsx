import React from "react";
import ChartBar from "./ChartBar/ChartBar";
import "./Chart.css";

export default function Chart(props) {
    const dataPointValues = props.dataPoints.map((dp) => dp.value);
    const max = Math.max(...dataPointValues); // max desse mês

    return (
        <div className="chart">
            {props.dataPoints.map((dp) => (
                <ChartBar
                    key={dp.label}
                    value={dp.value}
                    maxValue={max}
                    label={dp.label}
                />
            ))}
        </div>
    );
}
