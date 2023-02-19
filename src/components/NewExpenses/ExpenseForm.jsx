import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
    const [title, setTitle] = useState("oie");
    const [price, setPrice] = useState(120);
    const [date, setDate] = useState("01/01/2023");

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handlePriceChange(e) {
        setPrice(e.target.value);
    }

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const expenseData = {
            title,
            price,
            // @ts-ignore
            date: new Date(date),
        };

        props.onSaveData(expenseData);
        setDate("");
        setPrice(0);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="controls">
                <div className="control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="control">
                    <label>Price</label>
                    <input
                        type="number"
                        value={price}
                        min="0"
                        onChange={handlePriceChange}
                    />
                </div>
                <div className="control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2023-12-31"
                        onChange={handleDateChange}
                        value={date}
                    />
                </div>
            </div>
            <div className="actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add New Expense</button>
            </div>
        </form>
    );
}
