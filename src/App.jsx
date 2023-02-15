import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
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

    return (
        <div className="App">
            <ExpenseItem
                title={expenses[0].title}
                price={expenses[0].price}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                price={expenses[1].price}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                price={expenses[2].price}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                price={expenses[3].price}
                date={expenses[3].date}
            />
        </div>
    );
}

export default App;
