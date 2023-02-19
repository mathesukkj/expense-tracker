import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(2023);

    const filteredExpensesArray = props.expenses.filter(
        (item) => item.date.getFullYear() == filteredYear
    );

    function handleChangeYear(year) {
        setFilteredYear(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                year={filteredYear}
                onChangeYear={handleChangeYear}
            />
            <ExpensesList array={filteredExpensesArray} />
        </Card>
    );
}
