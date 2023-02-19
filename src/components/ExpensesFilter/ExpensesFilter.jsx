import React, { useState } from "react";

export default function ExpensesFilter(props) {
    function handleSetYear(e) {
        props.onChangeYear(e.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="control">
                <label>Filter by year</label>
                <select onChange={handleSetYear}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}
