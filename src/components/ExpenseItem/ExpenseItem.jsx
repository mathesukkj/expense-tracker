import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

export default function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="description">
                <h2>{props.title}</h2>
                <div className="price">R${props.price}</div>
            </div>
        </div>
    );
}
