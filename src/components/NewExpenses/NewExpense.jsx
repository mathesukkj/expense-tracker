import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
    function handleSaveData(data) {
        const expenseData = {
            ...data,
            id: (Math.random() * 10000).toFixed(0).toString(),
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveData={handleSaveData} />
        </div>
    );
}
