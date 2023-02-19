import React, { useState } from "react";
import Card from "../../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    function handleClick() {
        setTitle("oie");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="description">
                <h2>{title}</h2>
                <div className="price">R${props.price}</div>
            </div>

            <button onClick={handleClick}>Click!</button>
        </Card>
    );
}
