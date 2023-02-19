import React, { useState } from "react";
import Card from "../../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

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
