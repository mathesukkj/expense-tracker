import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date.toISOString().substring(0, 10)}</div>

            <div className="description">
                <h2>{props.title}</h2>
                <div className="price">R${props.price}</div>
            </div>
        </div>
    );
}
