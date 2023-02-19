import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
    const [title, setTitle] = useState("oie");
    const [price, setPrice] = useState("R$120");
    const [date, setDate] = useState();

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
        console.log(expenseData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="controls">
                <div className="control">
                    <label>Title</label>
                    <input type="text" onChange={handleTitleChange} />
                </div>
                <div className="control">
                    <label>Price</label>
                    <input type="number" min="0" onChange={handlePriceChange} />
                </div>
                <div className="control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2023-12-31"
                        onClick={handleDateChange}
                    />
                </div>
            </div>
            <div className="actions">
                <button type="submit">Add New Expense</button>
            </div>
        </form>
    );
}
