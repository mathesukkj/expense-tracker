import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../Card/Card";

export default function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="description">
                <h2>{props.title}</h2>
                <div className="price">R${props.price}</div>
            </div>
        </Card>
    );
}
