import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

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
            <ExpensesChart array={filteredExpensesArray} />
            <ExpensesList array={filteredExpensesArray} />
        </Card>
    );
}
