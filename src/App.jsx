import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const expensesArray = [
    {
        id: "e1",
        title: "Seguro de Vida",
        price: 300,
        date: new Date(2023, 1, 10),
    },
    {
        id: "e2",
        title: "Mouse Pantera Pro",
        price: 429,
        date: new Date(2023, 2, 14),
    },
    {
        id: "e3",
        title: "Curso de React",
        price: 22.9,
        date: new Date(2022, 11, 17),
    },
    {
        id: "e4",
        title: "Monitor 144hz",
        price: 1100,
        date: new Date(2022, 10, 3),
    },
];

function App() {
    const [expenses, setExpenses] = useState(expensesArray);

    function handleAddExpense(expenseData) {
        setExpenses((prevState) => {
            return [expenseData, ...prevState];
        });
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={handleAddExpense} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
