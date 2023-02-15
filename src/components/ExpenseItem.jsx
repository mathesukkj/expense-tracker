import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>14 de Fevereiro de 2022</div>
            <div className="expense-item__description">
                <h2>Seguro de Vida</h2>
                <div className="expense-item__price">R$300.00</div>
            </div>
        </div>
    );
}
