import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem";
import "./Expenses.css";

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
            {filteredExpensesArray.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    date={item.date}
                />
            ))}
        </Card>
    );
}
