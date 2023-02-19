import React, { useState } from "react";
import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
    function handleSetYear(e) {
        props.onChangeYear(e.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="control">
                <label>Filter by year</label>
                <select onChange={handleSetYear} value={props.year}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
    );
}
