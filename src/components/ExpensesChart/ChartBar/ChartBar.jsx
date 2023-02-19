import "./ChartBar.css";
import React from "react";

export default function ChartBar(props) {
    let barHeight = "0%";
    if (props.maxValue > 0) {
        barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="inner">
                <div className="fill" style={{ height: barHeight }}></div>
            </div>
            <div className="label">{props.label}</div>
        </div>
    );
}
