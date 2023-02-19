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
            <ExpenseItem
                title={props.expenses[0].title}
                price={props.expenses[0].price}
                date={props.expenses[0].date}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                price={props.expenses[1].price}
                date={props.expenses[1].date}
            />
            <ExpenseItem
                title={props.expenses[2].title}
                price={props.expenses[2].price}
                date={props.expenses[2].date}
            />
            <ExpenseItem
                title={props.expenses[3].title}
                price={props.expenses[3].price}
                date={props.expenses[3].date}
            />
        </Card>
    );
}
