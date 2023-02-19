import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
    if (!props.array.length) {
        return <h3 className="fallback">No expenses found!</h3>;
    }

    return (
        <ul className="expenses-list">
            {props.array.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    date={item.date}
                />
            ))}
        </ul>
    );
}
