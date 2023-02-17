import "./ExpenseDate.css";

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString("pt-BR", { month: "long" });
    const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
    const year = props.date.toLocaleString("pt-BR", { year: "numeric" });

    return (
        <div className="expense-date">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="day">{day}</div>
        </div>
    );
}
