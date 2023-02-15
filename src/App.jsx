import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <ExpenseItem />
        </div>
    );
}

export default App;
