import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "../Expenses/ExpenseItem/ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
    const [filterYear, setFilterYear] = useState(2023);

    function handleChangeYear(year) {
        setFilterYear(year);
        console.log(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter year={filterYear} onChangeYear={handleChangeYear} />
            {props.expenses.map((item) => (
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
