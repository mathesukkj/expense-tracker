import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
    const [clicked, setClicked] = useState(false);

    function handleSaveData(data) {
        const expenseData = {
            ...data,
            id: (Math.random() * 10000).toFixed(0).toString(),
        };
        props.onAddExpense(expenseData);
    }

    function handleClick() {
        setClicked((prevState) => !prevState);
    }

    return (
        <div className="new-expense">
            {!clicked && <button onClick={handleClick}>Add New Expense</button>}
            {clicked && (
                <ExpenseForm
                    onSaveData={handleSaveData}
                    onCancel={handleClick}
                />
            )}
        </div>
    );
}
